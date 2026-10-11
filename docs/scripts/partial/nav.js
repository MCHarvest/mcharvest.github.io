/* Silver Glass navigation: active link, mobile menu and the Plugins dropdown.
   Called by include.js once the header partial is in the page.
   Design reference: .agents/design/nav.md. */
(function () {
  'use strict';

  var DESKTOP = window.matchMedia('(min-width: 900px)');

  function markActive(header, section) {
    if (!section) {
      return;
    }
    header.querySelectorAll('[data-section="' + section + '"]').forEach(function (link) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
      var dropdown = link.closest('.nav__dd');
      if (dropdown) {
        dropdown.querySelector('.nav__dd-toggle').classList.add('is-active');
      }
    });
  }

  function setExpanded(button, panel, open) {
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.classList.toggle('is-open', open);
  }

  function wireMenu(header) {
    var toggle = header.querySelector('.nav__toggle');
    var links = header.querySelector('.nav__links');
    if (!toggle || !links) {
      return function () {};
    }
    toggle.addEventListener('click', function () {
      setExpanded(toggle, links, toggle.getAttribute('aria-expanded') !== 'true');
    });
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setExpanded(toggle, links, false);
      }
    });
    DESKTOP.addEventListener('change', function (event) {
      if (event.matches) {
        setExpanded(toggle, links, false);
      }
    });
    return function close() {
      setExpanded(toggle, links, false);
    };
  }

  function wireDropdowns(header) {
    var dropdowns = Array.prototype.slice.call(header.querySelectorAll('.nav__dd'));
    dropdowns.forEach(function (dropdown) {
      var button = dropdown.querySelector('.nav__dd-toggle');
      button.addEventListener('click', function () {
        setExpanded(button, dropdown, button.getAttribute('aria-expanded') !== 'true');
      });
    });
    return function closeAll() {
      dropdowns.forEach(function (dropdown) {
        setExpanded(dropdown.querySelector('.nav__dd-toggle'), dropdown, false);
      });
    };
  }

  function init(section) {
    var header = document.querySelector('.site-header');
    if (!header) {
      return;
    }
    markActive(header, section);
    var closeMenu = wireMenu(header);
    var closeDropdowns = wireDropdowns(header);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeDropdowns();
        closeMenu();
      }
    });
    document.addEventListener('click', function (event) {
      if (!header.contains(event.target)) {
        closeDropdowns();
        closeMenu();
      }
    });
  }

  window.SiteNav = { init: init };
})();
