# mcharvest.github.io

Documentation website for the MCHarvest plugin ecosystem, published with GitHub Pages at https://mcharvest.github.io.

This repository explains what each plugin is and how it works. It contains no plugin code.

## Layout

* `docs/`: the website (plain HTML, CSS and JavaScript, no build step).
  * `docs/index.html`: home page.
  * `docs/{plugin id}/index.html`: one page per plugin, e.g. `docs/core/`.
  * `docs/partial/`: shared header and footer, injected at runtime.
  * `docs/css/shared/`, `docs/css/partial/`, `docs/css/{section}/`: styles.
  * `docs/scripts/{folder}/`: scripts.
* `.agents/design/`: the Silver Glass design system, one file per scope. Start at `.agents/design/INDEX.md`.

## Publishing

In the repository settings, under Pages, deploy from the `master` branch and the `/docs` folder.

## Previewing locally

The header and footer load with `fetch()`, so serve the folder over HTTP instead of opening files directly:

```
python3 -m http.server --directory docs
```
