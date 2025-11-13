// === Background Carousel ===
let slides = document.querySelectorAll(".bg-slide");
let current = 0;

function nextSlide() {
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  current = (current + 1) % slides.length;
}
nextSlide();
setInterval(nextSlide, 8000); // change every 8s

// === Fade-In Animation ===
const elements = document.querySelectorAll("section, .project-card, header h1, header h2, header p, .btn");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === Active Section Highlight in Navbar ===
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
