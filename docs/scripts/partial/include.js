/* Silver Glass runtime include: injects partial/header.html and
   partial/footer.html into their mount points, then wires navigation.
   Design reference: .agents/design/includes.md. */
(function () {
  'use strict';

  var root = typeof window.SITE_ROOT === 'string' ? window.SITE_ROOT : '';
  var section = typeof window.PAGE_SECTION === 'string' ? window.PAGE_SECTION : '';

  var FAVICON_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#b9c2d0"/>' +
    '</linearGradient></defs>' +
    '<rect x="1" y="1" width="30" height="30" rx="9" fill="url(#g)" stroke="#9aa6b8"/>' +
    '<path d="M9 22V10l7 7 7-7v12" fill="none" stroke="#3f5872" stroke-width="2.6" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function injectFavicon() {
    if (document.querySelector('link[rel="icon"]')) {
      return;
    }
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'data:image/svg+xml,' + encodeURIComponent(FAVICON_SVG);
    document.head.appendChild(link);
  }

  // Replaces the mount point itself (not its children) so the sticky header
  // is a direct child of <body> and sticks for the whole page.
  function mount(id, name) {
    var target = document.getElementById(id);
    if (!target) {
      return Promise.resolve();
    }
    return fetch(root + 'partial/' + name + '.html')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.text();
      })
      .then(function (html) {
        var template = document.createElement('template');
        template.innerHTML = html.split('{{ROOT}}').join(root);
        target.replaceWith(template.content);
      })
      .catch(function (error) {
        console.warn('Could not load partial/' + name + '.html:', error);
      });
  }

  function stampYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = year;
    });
  }

  injectFavicon();
  Promise.all([mount('site-header', 'header'), mount('site-footer', 'footer')]).then(function () {
    stampYear();
    if (window.SiteNav) {
      window.SiteNav.init(section);
    }
  });
})();
