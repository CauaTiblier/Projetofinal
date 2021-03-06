export default function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  if (tabMenu.length) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
