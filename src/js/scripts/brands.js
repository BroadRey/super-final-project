import { tabletMedia } from './swiper';

export let readmoreBrandsText = document.querySelector('.technique-brands').querySelector('.read-more__text');
export let brandsContainer = document.querySelector('.brands-swiper__container');
export let readmoreBrandsArrows = document.querySelector('.technique-brands').querySelector('.read-more__arrows');
export let readmoreBrandsButton = document.querySelector('.technique-brands').querySelector('.read-more__button');

if (tabletMedia.matches) {
  readmoreBrandsButton.addEventListener('click', function () {
    if (brandsContainer.classList.contains('brands-swiper__container--show')) {
      brandsContainer.classList.toggle('brands-swiper__container--show');
      readmoreBrandsText.textContent = 'Показать все';
      readmoreBrandsArrows.style.transform = 'rotate(360deg)';
    } else {
      brandsContainer.classList.toggle('brands-swiper__container--show');
      readmoreBrandsText.textContent = 'Скрыть';
      readmoreBrandsArrows.style.transform = 'rotate(180deg)';
    }
  });
}
