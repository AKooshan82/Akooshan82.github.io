/* Optional enhancements only: the entire page, CV, and project details work
   without JavaScript. Adjust cellSize, the seed density, or the 240 ms interval
   below to change the decorative Conway's Game of Life background. */
(() => {
  "use strict";

  // Reflect the section in view without changing the URL during scrolling.
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href")));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          for (const link of links) {
            if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          }
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    sections.filter(Boolean).forEach((section) => observer.observe(section));
  }

  // A quiet Conway's Game of Life backdrop, bounded to the viewport.
  const canvas = document.getElementById("life-background");
  const context = canvas?.getContext("2d");
  if (!context) return;
  const control = document.querySelector(".motion-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = reducedMotion.matches;
  let columns, rows, cells, nextCells;
  let frame = null;
  let lastUpdate = 0;
  const cellSize = 13;

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "rgba(112, 165, 222, 0.26)";
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        if (cells[y * columns + x]) context.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
      }
    }
  }

  // Limit pixel density to keep the canvas inexpensive on high-DPI screens.
  function resize() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * scale);
    canvas.height = Math.round(window.innerHeight * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    columns = Math.ceil(window.innerWidth / cellSize);
    rows = Math.ceil(window.innerHeight / cellSize);
    cells = Uint8Array.from({ length: columns * rows }, () => Number(Math.random() < 0.13));
    nextCells = new Uint8Array(cells.length);
    draw();
  }

  // Conway rules: three neighbors create life; two preserve a living cell.
  function step() {
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        let neighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx || dy) neighbors += cells[((y + dy + rows) % rows) * columns + ((x + dx + columns) % columns)];
          }
        }
        const index = y * columns + x;
        nextCells[index] = Number(neighbors === 3 || (cells[index] && neighbors === 2));
      }
    }
    [cells, nextCells] = [nextCells, cells];
  }

  function animate(time) {
    if (time - lastUpdate >= 240) {
      step();
      draw();
      lastUpdate = time;
    }
    frame = requestAnimationFrame(animate);
  }

  // Stop background work in hidden tabs and when the user pauses motion.
  function syncMotion() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
    control.textContent = paused ? "Play background" : "Pause background";
    control.setAttribute("aria-pressed", String(paused));
    if (!paused && !document.hidden) frame = requestAnimationFrame(animate);
  }

  control.hidden = false;
  control.addEventListener("click", () => {
    paused = !paused;
    syncMotion();
  });
  reducedMotion.addEventListener("change", () => {
    paused = reducedMotion.matches;
    syncMotion();
  });
  document.addEventListener("visibilitychange", syncMotion);
  window.addEventListener("resize", resize);
  resize();
  syncMotion();
})();
