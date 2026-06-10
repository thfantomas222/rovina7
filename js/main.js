// Rovina 7 — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL FADE-IN ───────────────────────────────────────────────
  // Elements to animate. Add the class 'reveal' to anything you want
  // to drift up and fade in as it enters the viewport.
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target); // animate once only
      }
    });
  }, {
    threshold: 0.12,      // trigger when 12% of element is visible
    rootMargin: '0px 0px -40px 0px' // slight offset so it fires just before fully in view
  });

  revealEls.forEach(el => revealObserver.observe(el));

  // ─── ACTIVE NAV HIGHLIGHTING ──────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.opacity = link.getAttribute('href') === `#${entry.target.id}` ? '1' : '0.6';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => navObserver.observe(section));

  // ─── SMOOTH SCROLL TO CONTACT ────────────────────────────────────
  document.querySelectorAll('a[href="#contact"], .contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.getElementById('contact');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── ALBUM CLICK FEEDBACK ────────────────────────────────────────
  document.querySelectorAll('.album-cover').forEach(cover => {
    cover.addEventListener('click', () => {
      cover.style.transform = 'scale(0.97)';
      setTimeout(() => { cover.style.transform = ''; }, 150);
    });
  });

});
