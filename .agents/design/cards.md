# Card grid

Classes: `.card-grid` > `.card` (`css/shared/components.css`).

* Grid: `repeat(auto-fill, minmax(min(100%, 248px), 1fr))`, 18px gap.
* Card: glass surface recipe, 22px padding, flex column.
* `a.card` is clickable and lifts on hover/focus (`translateY(-4px)`,
  `--shadow-lg`).
* Parts: `.card__icon` (40px silver tile holding a 22px inline SVG,
  `aria-hidden`), `.card__title`, `.card__desc`, `.card__more` (pinned to the
  bottom, accent link text).
* `.card--muted`: faint, shadowless variant for placeholders.
