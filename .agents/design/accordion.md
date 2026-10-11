# Accordion

Markup: `.accordion` > `details.acc` > `summary` + `.acc__body`
(`css/shared/components.css`).

* **Native `<details>`**, no script.
* The default marker is hidden; a round `+` / `–` marker is drawn with
  `summary::after`.
* Items: `--glass-strong`, hairline border, `--radius-sm`; summary hover uses
  `--accent-soft`.
* Use for FAQs and optional detail.
