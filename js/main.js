import { goods } from "../mocks/goods.js"

const menuBtn = document.querySelector('.menu__button')
const menuModal = document.querySelector('.header__menu-list')

const goodsList = document.querySelector('.goods__content')
const goodsItemTemplate = document.querySelector('#goods__item-template').content
const newGoodsItemTemplate = goodsItemTemplate.querySelector('.goods__item')
const goodsItemFragment = document.createDocumentFragment()

goods.forEach((good) => {
  const goodElement = newGoodsItemTemplate.cloneNode(true)
  const goodImg = goodElement.querySelector('.goods__item-img')
  const goodPrice = goodElement.querySelector('.goods__item-price')
  const goodTitle = goodElement.querySelector('.goods__item-title')
  const goodText = goodElement.querySelector('.goods__item-text')

  goodImg.setAttribute('src', `images/${good.image}`)
  goodPrice.textContent = good.price;
  goodTitle.textContent = good.title
  goodText.innerText = good.text[0] + '\n' + good.text[1]

  goodsItemFragment.append(goodElement)
})

goodsList.append(goodsItemFragment)


menuBtn.addEventListener('click', () => {
  menuModal.classList.toggle('menu--open')
  console.log('click');
})