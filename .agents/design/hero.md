# Hero banner

Class: `.hero` (`css/shared/components.css`).

* Large intro glass panel: `--glass`, `--blur`, `--glass-border`,
  `--radius-lg`, `--shadow-md`, padding `clamp(28px, 5vw, 56px)`.
* Two soft radial glows (`::before` white top-right, `::after` faint accent
  bottom-left), `pointer-events: none`.
* Typical content: `.eyebrow`, `h1` (max 20ch), `.lead`, then a `.btn-row`
  and/or `.chip-row` (24px top margin).
* One hero per page, directly after breadcrumbs.
