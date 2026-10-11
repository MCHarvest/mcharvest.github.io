# Runtime include system

Header and footer are injected at runtime so navigation lives in one place.
Repo-agnostic pattern.

* **Partials:** `partial/header.html` and `partial/footer.html`. Internal links
  inside them use a `{{ROOT}}` token.
* **Globals:** each page sets, in `<head>`, `window.SITE_ROOT` (relative path
  back to the site root: `""`, `"../"`, `"../../"`) and `window.PAGE_SECTION`
  (for active-nav highlighting).
* **Mount points:** `<div id="site-header"></div>` and
  `<div id="site-footer"></div>`.
* **Loader:** `scripts/partial/include.js` fetches both partials, replaces
  `{{ROOT}}` with `SITE_ROOT`, **replaces** each mount point with the partial
  (keeps the sticky header a direct child of `<body>`), injects an inline SVG
  favicon, stamps `[data-year]`, then calls `SiteNav.init(PAGE_SECTION)` from
  `scripts/partial/nav.js`.
* **Script order:** `nav.js` then `include.js`, both `defer`.

Because it uses `fetch()`, always serve over HTTP when testing (for example
`python3 -m http.server --directory docs`).

GitHub Pages: `docs/.nojekyll` must exist so the site is served as-is and
Jekyll never processes the `{{ROOT}}` tokens.
