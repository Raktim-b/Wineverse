document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  var swiperSpot = new Swiper(".swiper-spot", {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 3000,

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
  var swiperBest = new Swiper(".swiper-best", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    speed: 3000,
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
  var swiperGift = new Swiper(".swiper-disco", {
    slidesPerView: 1,
    spaceBetween: 50,
    // speed: 3000,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 2000,
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
  var swiperTrend = new Swiper(".trend-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 3000,
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

      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  const addToCartBtns = document.querySelectorAll(".addToCartBtn");
  const modalElement = document.getElementById("cartModal");
  const cartModal = new bootstrap.Modal(modalElement);

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent any weird default action
      cartModal.show();

      // hide automatically after 3 seconds
      setTimeout(() => {
        cartModal.hide();
      }, 3000);
    });
  });
  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";

    requestAnimationFrame(MouseMove);
  }
  MouseMove();
  // Back TO Top
  const backToTopBtn = document.getElementById("backToTop");

  // Show button when user scrolls down 300px
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
