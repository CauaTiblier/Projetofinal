export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  let window60;
  function animaScroll() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const sectionVisible = (sectionTop - window60) < 0;
      if (sectionVisible) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    window60 = window.innerHeight * 0.6;
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
