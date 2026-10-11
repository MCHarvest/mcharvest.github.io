# Backdrop

The page background is a fixed, layered silver gradient on `body`
(`css/shared/main.css`):

* soft white highlights top-left and top-right (radial gradients),
* a light silver wash toward the bottom (radial gradient of `--silver-300`),
* over `linear-gradient(160deg, #eef1f6 0%, #dbe1ea 100%)`,
* with `background-color: var(--silver-100)` as the fallback.

It uses `background-attachment: fixed`, so content scrolls over a stable field.
Glass surfaces ([glass.md](glass.md)) are designed to sit on this backdrop.
