/* The PDF is the single source for this preview and the download.
   Keep the pinned PDF.js version here and in cv.html's viewer stylesheet in sync. */
const status = document.getElementById("pdf-status");
const base = "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.149/";

try {
  const pdfjs = await import(`${base}build/pdf.mjs`);
  const { PDFViewer, PDFLinkService, EventBus } = await import(`${base}web/pdf_viewer.mjs`);
  pdfjs.GlobalWorkerOptions.workerSrc = `${base}build/pdf.worker.mjs`;

  const container = document.getElementById("pdf-container");
  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus });
  const viewer = new PDFViewer({ container, eventBus, linkService });
  linkService.setViewer(viewer);

  // Fit every page to the preview width, including after a phone rotates.
  eventBus.on("pagesinit", () => {
    viewer.currentScaleValue = "page-width";
    status.textContent = `${viewer.pagesCount} pages · Scroll to read`;
    new ResizeObserver(() => {
      viewer.currentScaleValue = "page-width";
    }).observe(container);
  });

  const pdf = await pdfjs.getDocument({
    url: "cv.pdf",
    cMapUrl: `${base}cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `${base}standard_fonts/`,
    wasmUrl: `${base}wasm/`,
    // A CV needs text and links, not executable PDF actions.
    isEvalSupported: false,
  }).promise;
  viewer.setDocument(pdf);
  linkService.setDocument(pdf);
} catch (error) {
  status.textContent = "The preview could not load. Use Open PDF or Download CV above to read the document.";
  document.querySelector(".cv-pdf-frame").hidden = true;
  console.error("CV preview:", error);
}
