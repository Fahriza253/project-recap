const motionOk = () =>
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initReveal() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!motionOk()) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  nodes.forEach((el) => io.observe(el));
}

function initSliders() {
  const roots = document.querySelectorAll<HTMLElement>("[data-slider]");

  roots.forEach((root) => {
    const track = root.querySelector<HTMLElement>("[data-slider-track]");
    const slides = [...root.querySelectorAll<HTMLElement>("[data-slide]")];
    const status = root.querySelector<HTMLElement>("[data-slider-status]");
    const dots = [...root.querySelectorAll<HTMLElement>("[data-slider-dot]")];
    if (!track || slides.length === 0) return;

    let index = 0;

    const sync = () => {
      if (status) {
        status.textContent = `${index + 1} / ${slides.length}`;
      }
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    };

    const go = (next: number) => {
      index = (next + slides.length) % slides.length;
      const left = slides[index].offsetLeft;
      track.scrollTo({
        left,
        behavior: motionOk() ? "smooth" : "auto",
      });
      sync();
    };

    root.querySelector("[data-prev]")?.addEventListener("click", () => go(index - 1));
    root.querySelector("[data-next]")?.addEventListener("click", () => go(index + 1));
    dots.forEach((dot, i) => dot.addEventListener("click", () => go(i)));

    track.addEventListener(
      "scroll",
      () => {
        const width = track.clientWidth;
        if (width === 0) return;
        index = Math.round(track.scrollLeft / width);
        sync();
      },
      { passive: true },
    );

    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(index + 1);
      }
    });

    sync();
  });
}

initReveal();
initSliders();
