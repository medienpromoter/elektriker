(function () {
  'use strict';

  // Reduced-motion: Inhalte sofort zeigen, keine Animation
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  // Gruppiere Elemente nach threshold-Wert (ein Observer pro Wert)
  var groups = {};
  document.querySelectorAll('.reveal').forEach(function (el) {
    var t = parseFloat(el.dataset.threshold) || 0.15;
    if (!groups[t]) groups[t] = [];
    groups[t].push(el);
  });

  Object.keys(groups).forEach(function (threshold) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var duration = el.dataset.duration || '600';
        var delay    = el.dataset.delay    || '0';
        var easing   = el.dataset.easing   || 'ease-out';

        // Easing-Map: sprechende Namen → CSS-Werte
        var easingMap = {
          'ease-out':      'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'ease-in':       'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          'ease-in-out':   'cubic-bezier(0.645, 0.045, 0.355, 1)',
          'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          'linear':        'linear',
        };
        var cssEasing = easingMap[easing] || easing;

        el.style.transitionDuration       = duration + 'ms';
        el.style.transitionDelay          = delay + 'ms';
        el.style.transitionTimingFunction = cssEasing;

        el.classList.add('is-visible');

        if ((el.dataset.once || 'true') === 'true') {
          observer.unobserve(el);
        }
      });
    }, { threshold: parseFloat(threshold) });

    groups[threshold].forEach(function (el) { observer.observe(el); });
  });
})();
