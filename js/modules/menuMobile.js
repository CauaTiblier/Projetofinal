import clickOut from './outsideClick.js';

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuBtn.classList.add('active');
    clickOut(menuList, events, () => {
      menuList.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  }

  events.forEach((e) => menuBtn.addEventListener(e, openMenu));
}
