# Amir Kooshan’s website

A single, static page at https://akooshan82.github.io/. No framework, packages,
build commands, generated folders, or custom GitHub Actions workflows.

## Files

- `index.html` — all content: biography, news, research, projects, CV, and contact.
- `styles.css` — styling, with numbered comments for each section.
- `script.js` — optional navigation highlighting and the animated background.
- `photo.jpg` — profile photo.
- `cv.pdf` — the downloadable two-page CV.
- `cv-preview.png` — first-page image shown in the CV section.
- `.nojekyll` — tells GitHub Pages to serve the files directly.
- `.gitignore` — keeps macOS metadata out of Git.
- `LICENSE` — retained license notice from the original site.
- `README.md` — this guide.

## Edit and preview

Edit the clearly marked sections in `index.html`. Project details expand on the
homepage; there are no separate project or CV pages. The CV section is `/#cv`.

Open `index.html` directly, or serve this folder locally:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000. Check the page at desktop and mobile widths.

## Replace the CV

Replace `cv.pdf` and regenerate `cv-preview.png` from its first page with Poppler:

```sh
pdftoppm -f 1 -singlefile -scale-to 1400 -png cv.pdf cv-preview
```

Update the date, page count, and preview image dimensions in the CV section of
`index.html` if they changed. The current CV says “Last updated in May 2026.”

## Publish

Commit and push to `master`, the only branch. In **Settings → Pages**, the source
is **Deploy from a branch → master → / (root)**. GitHub handles publishing;
there is no separate `gh-pages` branch. `.nojekyll` bypasses Jekyll processing.

The pre-cleanup Git history is preserved. A full branch backup was also saved
outside this repository before removing the old branches and template files.

Visual inspiration: [Botian Xu](https://btx0424.github.io/) and the CV preview on
[Donya Jafari’s site](https://donya-jafari.github.io/cv.html).
