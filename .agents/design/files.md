# File organization

Site root is `docs/`.

```
docs/
  index.html                  # home page
  <plugin id>/index.html      # one folder per plugin page, e.g. core/
  partial/
    header.html
    footer.html
  css/
    shared/
      main.css                # :root tokens + base element styles
      layout.css              # container, page, split, breadcrumbs
      components.css          # cards, accordions, tables, badges, buttons, callouts
    partial/
      header.css              # site header and navigation
      footer.css              # site footer
    <section>/
      <section>.css           # page-specific layout only (home/, core/)
  scripts/
    partial/
      include.js              # runtime header/footer include
      nav.js                  # active link, mobile menu, dropdown
  .nojekyll
```

A page links, in order: `shared/main.css`, `shared/layout.css`,
`partial/header.css`, `partial/footer.css`, `shared/components.css`, then
`<section>/<section>.css`. Scripts: `scripts/partial/nav.js` then
`scripts/partial/include.js`, both `defer`.

New scripts go in `scripts/<folder name>/`, grouped the same way as the CSS.
