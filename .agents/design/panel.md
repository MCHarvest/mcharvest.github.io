# Panel and section

Classes: `.panel`, `.section` (`css/shared/components.css`).

* Grouped glass block using the surface recipe ([glass.md](glass.md)), padding
  `clamp(20px, 3.4vw, 32px)`, radius `--radius`.
* `.section__head`: wraps the section's `.eyebrow`, `h2` and a short muted
  intro paragraph, 18px below.
* The last child has no bottom margin.
* Give each `.section` an `id` and `aria-labelledby` pointing at its `h2`.
