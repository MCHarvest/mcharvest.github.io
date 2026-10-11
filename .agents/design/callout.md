# Callout

Markup: `.callout` > `svg.callout__icon` + `.callout__body`
(`css/shared/components.css`).

| Variant | Left border | Use |
|---|---|---|
| `.callout--info` | `--accent` | Notes and tips. |
| `.callout--warn` | `--warn`, warm tint | Things that can go wrong. |
| `.callout--danger` | `--danger`, rose tint | Destructive or breaking outcomes. |

* Optional `.callout__title` (`<strong>`) on its own line.
* The icon is inline SVG with `aria-hidden="true"`.
