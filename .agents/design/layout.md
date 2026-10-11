# Layout

Defined in `css/shared/layout.css`.

| Class | Use |
|---|---|
| `.container` | Max `--maxw` (1120px), centered, side padding `--gutter`. |
| `.narrow` | With `.container`: max `--maxw-narrow` (880px) for text-heavy pages. |
| `.page` | Vertical page padding (36px / 64px, smaller on phones) and 28px rhythm between its direct children. Only sets top and bottom padding so it never cancels the container gutter. |
| `.split` | Two or more equal columns that collapse to one below about 320px each. |

## Page skeleton

Every page: skip link, `#site-header` mount, `<main id="main">` holding
`<div class="container page">` (add `narrow` for reading pages), then the
`#site-footer` mount. See [includes.md](includes.md).

## Responsive rules

* Below 900px the navigation collapses into a toggled panel ([nav.md](nav.md)).
* Grids use `auto-fit` / `auto-fill` with `minmax(min(100%, Npx), 1fr)` so they
  reflow without overflowing.
* Grid and flex children get `min-width: 0` so wide content scrolls inside its
  own box ([scroll.md](scroll.md)).

## Section stylesheets

A page-specific layout goes in `css/<section>/<section>.css` and is linked last.
In this site: `css/home/home.css` (request flow diagram) and
`css/core/core.css` (numbered installation steps). Use tokens only.
