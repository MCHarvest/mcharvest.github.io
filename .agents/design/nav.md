# Header and navigation

Markup: `partial/header.html`. Styles: `css/partial/header.css`.
Behavior: `scripts/partial/nav.js`.

## Structure

* `.site-header`: sticky (`top: 0`, `z-index: 50`), height `--header-h`,
  `--glass-strong` with `--blur`, hairline bottom border, `--shadow-sm`.
* `.nav` (also `.container`): flex row.
  * `.nav__brand`: inline SVG logo (`.nav__logo`) plus the site name.
  * `.nav__toggle`: mobile menu `<button>` with `aria-expanded` and
    `aria-controls="nav-links"`; three bars that morph into an X when open.
  * `.nav__links#nav-links`: list of `.nav__link` items.
  * `.nav__dd`: optional dropdown. A `<button class="nav__link nav__dd-toggle">`
    with a `.nav__caret`, and a `.nav__dd-menu` of `.nav__dd-link` items (title
    plus `<small>` description).
  * `.nav__spacer`: an empty `<li>` with `margin-left: auto` that pushes the
    last link (the call to action, `.nav__link--cta`) to the far right.

## Active state

Links carry `data-section`. The page sets `window.PAGE_SECTION`; `nav.js` adds
`.is-active` and `aria-current="page"` to matching links. When the active link
is inside a dropdown, the dropdown toggle is marked active too.

## Dropdown

Opens on hover, on `:focus-within` (keyboard) and on click (`.is-open`, with
`aria-expanded`). It is a content-covering overlay, so it is opaque and never
blurred ([glass.md](glass.md)). A transparent `::before` bridge keeps it open
while the pointer travels from the toggle into the menu.

## Mobile (below 900px)

* `.nav__toggle` shows; `.nav__links` becomes an opaque panel under the header
  (`top: var(--header-h)`), stacked full-width links, scrollable if taller than
  the viewport.
* The dropdown expands inline (indented, left hairline) when its toggle is
  tapped.
* The panel closes on link click, Escape, outside click, or when the viewport
  grows to desktop width.
