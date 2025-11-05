document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 6000,
      // disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiperPop = new Swiper(".pop-swiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
  var swiperRec = new Swiper(".rec-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
});
