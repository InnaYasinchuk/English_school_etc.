const body = document.body;

// BURGER MENU

const menu = document.querySelector(".header-menu");
const menuBtn = document.querySelector(".menu-burger");
const headerBtn = document.querySelector("#header-btn");

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

menu.querySelectorAll(".header-menu__list-item").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("lock");
  });
});

headerBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("lock");
});

//  TEACHERS SWIPER

const teachersSwiper = new Swiper("#teachersSwiper", {
  slidesPerView: 1.3,
  spaceBetween: 10,
  loop: false,
  speed: 3000,
  slideToClickedSlide: true,
  // centeredSlides: true,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    // dynamicMainBullets: 2,
  },
  breakpoints: {
    360: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 1.7,
    },

    500: {
      slidesPerView: 2.2,
    },

    768: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },

    992: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  },
});

// MODAL VIDEO

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let name = btns[i].getAttribute("data-modal-btn");

    let modal = document.querySelector("*[data-modal-box = '" + name + "']");
    modal.classList.add("show");
    body.classList.add("lock");

    let video = modal.querySelector("video");
    if (video) {
      video.play();
    }

    let close = modal.querySelector(".teachers-modal-box__close-btn");
    close.addEventListener("click", function () {
      modal.classList.remove("show");
      body.classList.remove("lock");

      let video = modal.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
}

window.onclick = function (e) {
  if (e.target.hasAttribute("data-modal-box")) {
    let modals = document.querySelectorAll("*[data-modal-box]");
    for (let i = 0; i < modals.length; i++) {
      let modal = modals[i];
      if (e.target === modal) {
        modal.classList.remove("show");
        body.classList.remove("lock");

        let video = modal.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    }
  }
};

// TARIFFS SLIDER

const tariffsSwiper = new Swiper("#tariffsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: false,
  speed: 1700,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    576: {
      spaceBetween: 15,
    },
    992: {
      spaceBetween: 20,
    },
    1050: {
      spaceBetween: 25,
    },
    1400: {
      spaceBetween: 30,
    },
    1550: {
      spaceBetween: 55,
    },
  },
});

// QUESTIONS

let accordionTitle = document.querySelectorAll(".accordion__item-title");
let accordionItem = document.querySelectorAll(".accordion__item");

accordionTitle.forEach((el, index) => {
  el.addEventListener("click", () => {
    let accordionContent = el.nextElementSibling;
    let faqClose = document.querySelectorAll(".accordion__item-close")[index];
    let windowWidth = window.innerWidth;

    if (accordionContent.style.maxHeight) {
      document.querySelectorAll(".accordion__item-content").forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
        el.classList.remove("open");
      });

      document.querySelectorAll(".accordion__item-title").forEach((el) => {
        el.style.color = "#fff";
      });

      document.querySelectorAll(".accordion__item-close").forEach((el) => {
        el.style.transform = `scale(${getScaleValueFaqClose(
          windowWidth
        )}) rotate(0deg)`;
        el.style.stroke = "#fff";
      });
    } else {
      document.querySelectorAll(".accordion__item-content").forEach((el) => {
        el.style.maxHeight = null;
        el.style.marginTop = "0px";
        el.classList.remove("open");
      });

      document.querySelectorAll(".accordion__item-title").forEach((el) => {
        el.style.color = "#fff";
      });

      document.querySelectorAll(".accordion__item-close").forEach((el) => {
        el.style.transform = `scale(${getScaleValueFaqClose(
          windowWidth
        )}) rotate(0deg)`;
        el.style.stroke = "#fff";
      });

      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 20 + "px";
      accordionContent.style.marginTop = `${getMarginTopValue(windowWidth)}px`;
      faqClose.style.transform = `scale(${getScaleValueFaqClose(
        windowWidth
      )}) rotate(45deg)`;
      faqClose.style.stroke = "#212019";
      accordionContent.classList.add("open");
      el.style.color = "#212019";
    }
  });
});

function getScaleValueFaqClose(width) {
  if (width <= 389.98) {
    return 0.45;
  } else if (width > 389.98 && width <= 575.98) {
    return 0.5;
  } else if (width > 575.98 && width <= 767.98) {
    return 0.6;
  } else if (width > 767.98 && width <= 991.98) {
    return 0.8;
  } else {
    return 1;
  }
}

function getMarginTopValue(width) {
  if (width <= 389.98) {
    return 5;
  } else if (width > 389.98 && width <= 575.98) {
    return 8;
  } else if (width > 575.98 && width <= 767.98) {
    return 10;
  } else if (width > 767.98 && width <= 991.98) {
    return 20;
  } else {
    return 30;
  }
}

//  REVIEWS SWIPER

const reviewsSwiperTop = new Swiper("#reviewsSwiperTop", {
  slidesPerView: "auto",
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 5000,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    360: {
      spaceBetween: 15,
    },
    655: {
      spaceBetween: 20,
    },

    768: {
      spaceBetween: 25,
    },
    1200: {
      spaceBetween: 40,
    },
  },
});

const reviewsSwiperBottom = new Swiper("#reviewsSwiperBottom", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 5000,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    360: {
      spaceBetween: 15,
    },
    655: {
      spaceBetween: 20,
    },

    768: {
      spaceBetween: 25,
    },
    1200: {
      spaceBetween: 40,
    },
  },
});

// CONTACT FORM

const form = document.getElementById("form");
const result = document.getElementById("result");
const resultBox = document.querySelector(".contact__form-result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);


  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        resultBox.classList.add("show");
        body.classList.add("lock");
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        resultBox.classList.remove("show");
        body.classList.remove("lock");
      }, 3000);
    });
});
