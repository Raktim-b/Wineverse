document.addEventListener("DOMContentLoaded", () => {
  var swiperSpot = new Swiper(".swiper-spot", {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 3000,
    disableOnInteraction: false, // Keep autoplay running after user interaction
    pauseOnMouseEnter: true,
    loop: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the Swiper container
      disableOnInteraction: false,
    },
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
   var swiperGift = new Swiper(".swiper-gift", {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 3000,
    disableOnInteraction: false, // Keep autoplay running after user interaction
    pauseOnMouseEnter: true,
    loop: true,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the Swiper container
      disableOnInteraction: false,
    },
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
