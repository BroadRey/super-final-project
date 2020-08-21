import { tabletMedia } from './swiper';

export let readmoreTypesText = document.querySelector('.technique-types').querySelector('.read-more__text');
export let typesContainer = document.querySelector('.types-swiper__container');
export let readmoreTypesArrows = document.querySelector('.technique-types').querySelector('.read-more__arrows');
export let readmoreTypesButton = document.querySelector('.technique-types').querySelector('.read-more__button');

if (tabletMedia.matches) {
  readmoreTypesButton.addEventListener('click', function () {
    if (typesContainer.classList.contains('types-swiper__container--show')) {
      typesContainer.classList.toggle('types-swiper__container--show');
      readmoreTypesText.textContent = 'Показать все';
      readmoreTypesArrows.style.transform = 'rotate(360deg)';
    } else {
      typesContainer.classList.toggle('types-swiper__container--show');
      readmoreTypesText.textContent = 'Скрыть';
      readmoreTypesArrows.style.transform = 'rotate(180deg)';
    }
  });
}