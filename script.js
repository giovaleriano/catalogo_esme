// ESME — Catálogo
// 1) Toque/clique na imagem do produto para virar e ver frente/verso
// 2) Revelação suave dos produtos ao rolar a página

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Flip cards ---------- */
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(card => {
    const toggle = () => card.classList.toggle('is-flipped');

    card.addEventListener('click', toggle);

    // acessibilidade: Enter ou Espaço também viram a carta
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ---------- Revelação ao rolar ---------- */
  const reveals = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  } else {
    // fallback para navegadores muito antigos
    reveals.forEach(el => el.classList.add('is-visible'));
  }

});
