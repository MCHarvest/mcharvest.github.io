# Footer

Markup: `partial/footer.html`. Styles: `css/partial/footer.css`.

* `.site-footer`: `--glass` with `--blur`, top `--glass-border` plus a hairline
  shadow line.
* `.footer__grid`: brand column (`.footer__col--brand`, `.footer__brand`,
  `.footer__tagline`) then link columns. Each link column is a `<nav>` with an
  `aria-label`, a `.footer__title` kicker and a `.footer__links` list.
* `.footer__bottom`: hairline-separated copyright row. The year is a
  `<span data-year>` stamped at runtime by `include.js`.
* Below 700px: the brand spans the full width and link columns sit two per row.
