# Breadcrumbs

Markup (`css/shared/layout.css`):

* `nav.breadcrumbs[aria-label="Breadcrumb"]` > `ol` of `li` items.
* Links are `--ink-500`, accent and underlined on hover.
* Separators are their own `li.sep` with `aria-hidden="true"` (`/`).
* The current page is a `span[aria-current="page"]`, `--ink-900`, weight 600.
* Placed first inside `.page`, above the hero, on every page except home.
