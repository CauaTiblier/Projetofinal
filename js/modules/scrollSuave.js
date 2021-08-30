export default function initScrollSuave() {
  const linksExternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // })
  }

  linksExternos.forEach((links) => {
    links.addEventListener('click', scrollSection);
  });
}
