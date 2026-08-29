/* =========================================================
   Header scroll state
   ========================================================= */
const header = document.getElementById("siteHeader");

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  },
  { passive: true },
);

/* =========================================================
   Mobile navigation
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navToggleIcon = document.getElementById("navToggleIcon");

const iconMenu =
  '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
const iconClose =
  '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>';

function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menú");
  navToggleIcon.innerHTML = iconMenu;
}

function openMenu() {
  navLinks.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Cerrar menú");
  navToggleIcon.innerHTML = iconClose;
}

navToggle.addEventListener("click", () => {
  navLinks.classList.contains("open") ? closeMenu() : openMenu();
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) closeMenu();
});

/* =========================================================
   Reveal on scroll
   ========================================================= */
const revealTargets = document.querySelectorAll(
  ".svc-card, .process-item, .pain-card",
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealTargets.forEach((el) => io.observe(el));

/* =========================================================
   Auto carousels
   ========================================================= */
function initCarousels() {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dotsContainer = carousel.querySelector(".carousel-dots");
    if (slides.length < 2) return;

    let current = 0;
    const interval = Number(carousel.dataset.interval) || 4500;
    let timer = null;

    // Crear dots
    slides.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", `Ir a imagen ${i + 1}`);
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(btn);
    });

    const dots = dotsContainer.querySelectorAll("button");

    function goTo(index) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = index;
      slides[current].classList.add("active");
      dots[current].classList.add("active");
      resetTimer();
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(next, interval);
    }

    // Pausa al pasar el mouse (mejor UX)
    carousel.addEventListener("mouseenter", () => clearInterval(timer));
    carousel.addEventListener("mouseleave", resetTimer);

    resetTimer();
  });
}

initCarousels();
