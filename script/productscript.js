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

  // PopUp Notification
  const lovePopup = document.getElementById("popupMsgLove");
  const cartPopup = document.getElementById("popupMsgCart");

  // Function to show popup
  function showPopup(popupElement) {
    popupElement.classList.add("show");

    setTimeout(() => {
      popupElement.classList.remove("show");
    }, 3000); // 3 seconds
  }

  //All Like Buttons
  const heartButtons = document.querySelectorAll(".heartBtn");
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showPopup(lovePopup);
    });
  });

  //All Add to Cart Buttons
  const cartButtons = document.querySelectorAll(".addtocartBtn");
  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showPopup(cartPopup);
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
  AOS.refresh();
});
window.onload = function () {
  const loader = document.querySelector(".loader-wrapper");
  const content = document.querySelector(".page-wrpr");

  // Keep loader for 3 seconds
  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("show");
    }, 500); // wait for fade-out transition
  }, 2000);
};
