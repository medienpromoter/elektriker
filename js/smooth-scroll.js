/**
 * smooth-scroll.js
 * ---------------------------------------------------------------
 * Eigenes, abhängigkeitsfreies Smooth-Scrolling für die gesamte
 * Seite. Übernimmt zwei Aufgaben:
 *
 *   1. Normales Mausrad-/Trackpad-Scrollen wird abgefangen und in
 *      eine gedämpfte, samtige Bewegung übersetzt (statt des
 *      abrupten nativen "Sprung-Scrollens" in festen Schritten).
 *   2. Klicks auf Anker-Links (<a href="#kontakt">) lösen ein
 *      animiertes Scrollen zur Zielposition aus, mit eigenem
 *      Easing statt dem nativen "scroll-behavior: smooth".
 *
 * Konfiguration erfolgt zentral oben in CONFIG sowie optional über
 * data-Attribute an einzelnen Links (siehe SKILL.md / reference.md).
 *
 * Einbindung (am Ende von <body>, möglichst als erstes Skript vor
 * animate.js, main.js, nav.js):
 *   <script src="/js/smooth-scroll.js" defer></script>
 *
 * WICHTIG: Diese Datei ersetzt das native Scrollen für Mausrad und
 * Anker-Klicks. Tastatur-Scrolling (Pfeiltasten, Bild-Auf/Ab,
 * Leertaste), Scrollbar-Drag und Touch-Wischen bleiben bewusst
 * NATIV, um Bedienbarkeit/Barrierefreiheit nicht zu verschlechtern
 * ---------------------------------------------------------------
 */

(function () {
  "use strict";

  var CONFIG = {
    wheelEnabled: true,
    wheelFriction: 0.90,
    wheelMultiplier: 1.0,
    wheelMaxVelocity: 120,

    anchorDuration: 800,
    anchorEasing: "easeOutQuad",
    anchorOffset: 0,

    respectReducedMotion: true,
  };

  var prefersReducedMotion =
    CONFIG.respectReducedMotion &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var EASING = {
    linear: function (t) { return t; },
    easeInQuad: function (t) { return t * t; },
    easeOutQuad: function (t) { return t * (2 - t); },
    easeInOutQuad: function (t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    easeOutCubic: function (t) { return 1 - Math.pow(1 - t, 3); },
    easeInOutCubic: function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; },
  };

  function getMaxScroll() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
  }

  function initWheelSmoothing() {
    if (!CONFIG.wheelEnabled || prefersReducedMotion) return;

    var current = window.scrollY;
    var target = window.scrollY;
    var ticking = false;

    function clampTarget() {
      target = Math.max(0, Math.min(target, getMaxScroll()));
    }

    function onWheel(e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (isInsideScrollableChild(e.target)) return;

      e.preventDefault();

      var delta = e.deltaY * CONFIG.wheelMultiplier;
      delta = Math.max(-CONFIG.wheelMaxVelocity, Math.min(CONFIG.wheelMaxVelocity, delta));

      target += delta;
      clampTarget();

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(step);
      }
    }

    function step() {
      var distance = target - current;
      if (Math.abs(distance) < 0.5) {
        current = target;
        window.scrollTo(0, current);
        ticking = false;
        return;
      }
      current += distance * (1 - CONFIG.wheelFriction);
      window.scrollTo(0, current);
      requestAnimationFrame(step);
    }

    function isInsideScrollableChild(el) {
      while (el && el !== document.body) {
        var style = window.getComputedStyle(el);
        var overflowY = style.overflowY;
        if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        current = window.scrollY;
        target = window.scrollY;
      }
    });

    window.addEventListener("wheel", onWheel, { passive: false });
  }

  function scrollToTarget(targetEl, options) {
    var duration = options.duration || CONFIG.anchorDuration;
    var easingName = options.easing || CONFIG.anchorEasing;
    var ease = EASING[easingName] || EASING.easeOutQuad;
    var offset = options.offset !== undefined ? options.offset : CONFIG.anchorOffset;

    var startY = window.scrollY;
    var targetY = Math.max(0, Math.min(targetEl.getBoundingClientRect().top + startY + offset, getMaxScroll()));
    var distance = targetY - startY;
    var startTime = null;

    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      setFocusForA11y(targetEl);
      return;
    }

    function frame(timestamp) {
      if (startTime === null) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = ease(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setFocusForA11y(targetEl);
      }
    }

    requestAnimationFrame(frame);
  }

  function setFocusForA11y(el) {
    if (!el.hasAttribute("tabindex")) {
      el.setAttribute("tabindex", "-1");
    }
    el.focus({ preventScroll: true });
  }

  function initAnchorScrolling() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      var targetEl = document.querySelector(hash);
      if (!targetEl) return;
      e.preventDefault();
      scrollToTarget(targetEl, {
        duration: parseInt(link.dataset.scrollDuration, 10) || undefined,
        easing: link.dataset.scrollEasing || undefined,
        offset: link.dataset.scrollOffset !== undefined ? parseInt(link.dataset.scrollOffset, 10) : undefined,
      });
      history.pushState(null, "", hash);
    });
  }

  function init() {
    initWheelSmoothing();
    initAnchorScrolling();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
