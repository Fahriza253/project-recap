const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const slides = [...document.querySelectorAll<HTMLElement>("[data-deck-slide]")];
const prev = document.querySelector<HTMLButtonElement>("[data-deck-prev]");
const next = document.querySelector<HTMLButtonElement>("[data-deck-next]");
const counter = document.querySelector<HTMLElement>("[data-deck-counter]");
const live = document.querySelector<HTMLElement>("[data-deck-live]");
const lightbox = document.querySelector<HTMLElement>("[data-deck-lightbox]");
const lightboxImg = document.querySelector<HTMLImageElement>("[data-deck-lightbox-img]");
const lightboxClose = document.querySelector<HTMLButtonElement>("[data-deck-lightbox-close]");

let index = 0;
let animating = false;
let lastFocus: HTMLElement | null = null;

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const value = Number.parseInt(raw, 10);
  if (Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(slides.length - 1, value - 1));
}

function setHash(nextIndex: number) {
  const nextHash = `#${nextIndex + 1}`;
  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }
}

function clearMotion(slide: HTMLElement) {
  slide.classList.remove(
    "is-enter-from-left",
    "is-enter-from-right",
    "is-exit-left",
    "is-exit-right",
  );
}

function syncChrome() {
  if (counter) {
    counter.textContent = `${index + 1} / ${slides.length}`;
  }
  prev?.setAttribute("aria-disabled", index === 0 ? "true" : "false");
  next?.setAttribute("aria-disabled", index === slides.length - 1 ? "true" : "false");
  const label = slides[index]?.getAttribute("aria-label") ?? "";
  if (live) {
    live.textContent = `Slide ${index + 1} dari ${slides.length}: ${label}`;
  }
}

function show(nextIndex: number, dir: number) {
  nextIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
  const from = slides[index];
  const to = slides[nextIndex];
  if (!from || !to) return;

  if (from === to) {
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === nextIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
      clearMotion(slide);
    });
    index = nextIndex;
    setHash(index);
    syncChrome();
    return;
  }

  if (animating) return;

  const instant = reduceMotion.matches;
  index = nextIndex;
  setHash(index);

  slides.forEach((slide) => {
    if (slide !== from && slide !== to) {
      slide.classList.remove("is-active");
      slide.setAttribute("aria-hidden", "true");
      clearMotion(slide);
    }
  });

  to.setAttribute("aria-hidden", "false");
  from.setAttribute("aria-hidden", "true");

  if (instant) {
    from.classList.remove("is-active");
    clearMotion(from);
    clearMotion(to);
    to.classList.add("is-active");
    syncChrome();
    return;
  }

  animating = true;
  clearMotion(from);
  clearMotion(to);
  from.classList.remove("is-active");
  from.classList.add(dir > 0 ? "is-exit-left" : "is-exit-right");
  to.classList.add("is-active", dir > 0 ? "is-enter-from-right" : "is-enter-from-left");

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    clearMotion(from);
    clearMotion(to);
    animating = false;
  };
  to.addEventListener("animationend", finish, { once: true });
  window.setTimeout(finish, 400);
  syncChrome();
}

function step(delta: number) {
  if (lightbox?.classList.contains("is-open")) return;
  if (delta < 0 && index === 0) return;
  if (delta > 0 && index === slides.length - 1) return;
  show(index + delta, delta);
}

function openShot(img: HTMLImageElement) {
  if (!lightbox || !lightboxImg || !lightboxClose) return;
  lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt;
  lightbox.hidden = false;
  lightbox.classList.add("is-open");
  lightboxClose.focus();
}

function closeShot() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("is-open");
  const hide = () => {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
  };
  if (reduceMotion.matches) hide();
  else window.setTimeout(hide, 200);
  lastFocus?.focus();
}

prev?.addEventListener("click", () => step(-1));
next?.addEventListener("click", () => step(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeShot();
    return;
  }
  if (event.key === "ArrowRight") step(1);
  if (event.key === "ArrowLeft") step(-1);
});

document.querySelectorAll<HTMLButtonElement>("[data-deck-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.parentElement?.querySelector("img");
    if (img) openShot(img);
  });
});

lightboxClose?.addEventListener("click", closeShot);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeShot();
});

window.addEventListener("hashchange", () => {
  const nextIndex = parseHash();
  show(nextIndex, nextIndex >= index ? 1 : -1);
});

show(parseHash(), 1);
