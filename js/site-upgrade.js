/* Grace Notary INK — shared UI behaviors
   Scroll-reveal + header elevation. Progressive enhancement only:
   without JS (or with reduced-motion set) every element stays visible. */
(function () {
    'use strict';

    // Header gains a shadow once the page is scrolled
    var header = document.querySelector('.header');
    if (header) {
        var onScroll = function () {
            header.classList.toggle('scrolled', window.scrollY > 8);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // Scroll reveal
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Skip inside the emergency-triage iframe/modal context
    if (window.self !== window.top) return;

    var selectors = [
        '.feature-card', '.review-card', '.stat-card', '.info-card',
        '.service-block', '.faq-item', '.service-area-feature',
        '.contact-item', '.highlight-box',
        '.why-choose-us h2', '.reviews-container h2', '.faq-section h2',
        '.service-areas h2', '.services-section h2', '.stats-section h2'
    ];

    var els = document.querySelectorAll(selectors.join(','));
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('rv-in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el, i) {
        el.classList.add('rv');
        // Stagger siblings slightly for a cascading entrance
        el.style.setProperty('--rv-d', (i % 4) * 70 + 'ms');
        io.observe(el);
    });
})();
