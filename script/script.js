document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the Swiper container
      disableOnInteraction: false,
    },
    speed: 800,
    on: {
      slideChangeTransitionStart: function () {
        // Fade out text of all slides
        document.querySelectorAll(".slide-text").forEach((el) => {
          el.classList.remove("active");
          el.classList.add("fade-out");
        });
      },
      slideChangeTransitionEnd: function () {
        // Add animation to active slide text
        const activeSlide = this.slides[this.activeIndex];
        const activeText = activeSlide.querySelector(".slide-text");
        if (activeText) {
          activeText.classList.remove("fade-out");
          activeText.classList.add("active");
        }
      },
    },
  });

  // Initialize first slide text
  window.addEventListener("load", () => {
    const firstText = document.querySelector(
      ".swiper-slide-active .slide-text"
    );
    if (firstText) firstText.classList.add("active");
  });
  var swiperPop = new Swiper(".pop-swiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
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
  var swiperTesti = new Swiper(".testi-swiper", {
    slidesPerView: 1,
    loop: true,

    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the Swiper container
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiperProc = new Swiper(".proc-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 3000,
    loop: true,
    navigation: {
      nextEl: ".proc-next",
      prevEl: ".proc-prev",
    },
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true, // Pause autoplay when mouse enters the Swiper container
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  
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
});
