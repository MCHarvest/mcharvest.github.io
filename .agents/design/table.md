# Table

Markup: `.table-wrap` > `table` (`css/shared/components.css`).

* Always wrap tables in `.table-wrap`: it scrolls horizontally when the table
  is wider than the screen ([scroll.md](scroll.md)).
* Wrap: `--glass-strong`, hairline border, `--radius-sm`.
* Header cells: uppercase `.8rem`, `--ink-500` on `--silver-050`, no wrap.
* Rows: hairline dividers, faint accent hover.
* `code` in cells never wraps.
* Use `<th scope="col">` on header cells.
