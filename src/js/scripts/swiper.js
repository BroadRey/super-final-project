export let pagination = document.querySelectorAll('.swiper-pagination');
export let mobileMedia = window.matchMedia("(min-width: 0px) and (max-width: 767px)");
export let tabletMedia = window.matchMedia("(min-width: 768px)");
export let isInit = false;
export let mySwiper;

export const swiperShow = function () {
  if (mobileMedia.matches) {
    if (!isInit) {
      isInit = true;
      mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,
        width: 238,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      });

      for (let i = 0; i < pagination.length; i++) {
        pagination[i].style.display = 'block';
      }
    }
  } else if (tabletMedia.matches) {
    if (mySwiper != null) {
      for (let swiper of mySwiper) {
        swiper.destroy();
      }
    }

    isInit = false;

    for (let i = 0; i < pagination.length; i++) {
      pagination[i].style.display = 'none';
    }
  }
};

window.addEventListener("load", swiperShow);
window.addEventListener("resize", swiperShow);

