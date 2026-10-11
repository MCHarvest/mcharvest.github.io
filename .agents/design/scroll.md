# Scrolling

* **The page never scrolls sideways.** `body` has `overflow-x: clip` as a guard,
  but the real rule is that wide content scrolls inside its own container:
  tables in `.table-wrap`, code in `pre` (`overflow-x: auto`).
* Grid and flex children get `min-width: 0` (`css/shared/layout.css`) so they
  can shrink and let their own content scroll.
* Setting names in tables (`.table-wrap code`) never wrap mid-word; a table too
  wide for the screen scrolls inside `.table-wrap`.
* **Sticky header.** `.site-header` is `position: sticky; top: 0`. It must be a
  direct child of `<body>`, which is why `include.js` replaces the mount point
  instead of filling it ([includes.md](includes.md)).
* **Anchor offset.** `html { scroll-padding-top: calc(var(--header-h) + 16px) }`
  so in-page links land below the sticky header.
* **Smooth scrolling** only when the user has no reduced-motion preference
  (`@media (prefers-reduced-motion: no-preference)`).
* **Fixed backdrop.** The body gradient is `background-attachment: fixed`;
  content scrolls over it ([backdrop.md](backdrop.md)).
* **Mobile menu.** The open panel caps at `100vh - --header-h` and scrolls
  internally.
