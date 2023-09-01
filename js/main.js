const menuBtn = document.querySelector('.menu__button')
const menuModal = document.querySelector('.header__menu-list')

menuBtn.addEventListener('click', () => {
  menuModal.classList.toggle('menu--open')
  console.log('click');
})