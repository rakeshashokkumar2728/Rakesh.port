// Basic interactivity: mobile nav toggle, contact form handler, year
document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // nav toggle for small screens
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  toggle && toggle.addEventListener('click', () => {
    const expanded = nav.style.display === 'flex';
    nav.style.display = expanded ? 'none' : 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        // close mobile nav after click
        if (window.innerWidth <= 800 && nav) nav.style.display = 'none';
      }
    });
  });

  // Contact form: demo submission (replace with real backend or email service)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name');
      const email = fd.get('email');
      const message = fd.get('message');

      // simple validation
      if (!name || !email || !message) {
        alert('Please fill all fields.');
        return;
      }

      // In a real site: send to server or use email API (e.g., Formspree, Netlify Forms)
      // For now, show a friendly confirmation and reset
      alert(`Thanks, ${name}! Your message has been received. (Demo)`);
      form.reset();
    });
  }
});