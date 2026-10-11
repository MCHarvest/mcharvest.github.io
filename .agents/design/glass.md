# Glass surfaces

## Surface recipe

Every raised element follows the same recipe:

```css
background: var(--glass);
-webkit-backdrop-filter: var(--blur);
backdrop-filter: var(--blur);
border: 1px solid var(--glass-border);
box-shadow: var(--shadow-sm);
border-radius: var(--radius);
```

Interactive cards lift on hover: `transform: translateY(-4px)` plus
`--shadow-lg`. Keep transitions short (`.15s` to `.2s ease`, i.e. `--ease`).

Rows that sit inside a glass panel (feature list rows, accordion items, tables,
callouts) use `--glass-strong` with a `--hairline` border instead of a second
blur, so text stays crisp.

## Overlays that cover content: never translucent

The glass recipe is for surfaces that sit **over the fixed background**, not
over other page content. Any overlay that **fully covers page content** (the
mobile navigation panel, dropdown menus, modals) must use an **opaque**
background and must not rely on `backdrop-filter` for legibility:

```css
/* content-covering overlay */
background: #ffffff;         /* or var(--surface-solid) */
-webkit-backdrop-filter: none;
backdrop-filter: none;
box-shadow: var(--shadow-md);
```

Why: when such an overlay is nested inside another element that already has
`backdrop-filter` (the blurred sticky header), the child's background paint can
be suppressed where `backdrop-filter` is unsupported or disabled, letting the
content behind bleed through. A blur over content you are hiding adds nothing
anyway, so make these overlays solid.

In this site: `.nav__dd-menu` and the mobile `.nav__links` panel
(`css/partial/header.css`).
