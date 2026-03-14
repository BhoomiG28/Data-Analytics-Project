// ===== PARTICLE ANIMATION =====
(function () {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#10b981', '#34d399', '#0ea5e9', '#38bdf8', '#6366f1'];
    const count = 28;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 4 + 2;
        p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay: ${Math.random() * 15}s;
      filter: blur(${Math.random() > 0.5 ? 1 : 0}px);
    `;
        container.appendChild(p);
    }
})();

// ===== SMOOTH ACTIVE NAV LINK ON SCROLL =====
(function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((l) => l.classList.remove('active'));
                    const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        },
        { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
})();

// ===== FADE-IN ON SCROLL for INSIGHT & ABOUT CARDS =====
(function () {
    const cards = document.querySelectorAll('.insight-card, .about-card, .page-card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, idx * 80);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.35s ease, box-shadow 0.35s ease';
        observer.observe(card);
    });
})();

// ===== NAVBAR SCROLL EFFECT =====
(function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.background = 'rgba(5, 12, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(5, 12, 15, 0.85)';
        }
    }, { passive: true });
})();
