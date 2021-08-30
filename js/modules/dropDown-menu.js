import clickOut from './outsideClick.js';

export default function initDropDown() {
  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active');
    clickOut(this, ['click', 'touchstart'], () => {
      this.classList.remove('active');
    });
  }
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userE) => {
      menu.addEventListener(userE, handleClick);
    });
  });
}
