# Amir Kooshan’s website

A small static website at https://akooshan82.github.io/. No framework, package installation,
build commands, generated folders, or custom GitHub Actions workflows.

## Files

- `index.html` — homepage: biography, news, research, projects, and contact.
- `cv.html` — CV page with download links and an embedded PDF viewer.
- `styles.css` — styling, with numbered comments for each section.
- `script.js` — optional navigation highlighting and the animated background.
- `cv.js` — loads the actual PDF with Mozilla PDF.js (a pinned version from jsDelivr).
- `photo.jpg` — profile photo.
- `cv.pdf` — the CV used by both the live preview and download.
- `.nojekyll` — tells GitHub Pages to serve the files directly.
- `.gitignore` — keeps macOS metadata out of Git.
- `LICENSE` — retained license notice from the original site.
- `README.md` — this guide.

## Edit and preview

Edit the clearly marked sections in `index.html`. Project details expand on the
homepage. CV links open `/cv.html`; the shared footer keeps contact on the right.

To preview the site, including the PDF viewer, serve this folder locally:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit http://127.0.0.1:8000. Check the page at desktop and mobile widths.

## Replace the CV

Replace **only `cv.pdf`**, keeping the same filename, then commit it to `master`.
The preview renders that PDF directly, so all pages and the download update
together. No screenshots or image-generation tools are needed.

The embedded viewer uses PDF.js to provide selectable text and scrolling on desktop
and phones. It needs JavaScript and access to jsDelivr. An “Open PDF” link remains
available if the viewer cannot load.

## Publish

Commit and push to `master`, the only branch. In **Settings → Pages**, the source
is **Deploy from a branch → master → / (root)**. GitHub handles publishing;
there is no separate `gh-pages` branch. `.nojekyll` bypasses Jekyll processing.

The pre-cleanup Git history is preserved. A full branch backup was also saved
outside this repository before removing the old branches and template files.
