export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    modalContainer.classList.toggle('ativo');
  }

  function clickFora(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (btnAbrir && btnFechar && modalContainer) {
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', clickFora);
  }
}
