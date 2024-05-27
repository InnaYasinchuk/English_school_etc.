const body = document.body;

//  TEACHERS SWIPER

const teachersSwiper = new Swiper("#teachersSwiper", {
  slidesPerView: 1.24,
  spaceBetween: 10,
  loop: false,
  speed: 3000,
  slideToClickedSlide: true,
  centeredSlides: true,
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
    410: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    470: {
      slidesPerView: 1.6,
      spaceBetween: 15,
    },

    510: {
      slidesPerView: 1.9,
      spaceBetween: 15,
    },

    655: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    860: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  },
});

// Modal

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let name = btns[i].getAttribute("data-modal-btn");
    let modal = document.querySelector("*[data-modal-box = '" + name + "']");
    modal.classList.add("show");
    body.classList.add("lock");

    // let video = modal.querySelector("video");
    // if (video) {
    //   video.play();
    // }

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

window.onload = function () {
  let modals = document.querySelectorAll("*[data-modal-box]");
  for (let i = 0; i < modals.length; i++) {
    let modal = modals[i];
    let video = modal.querySelector("video");
    if (video) {
      modal.addEventListener("transitionend", function () {
        video.play();
      });
    }
  }
};

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

// CONTACT FORM

const form = document.getElementById("form");
const result = document.getElementById("result");
const resultBox = document.querySelector(".contact__form-result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  // result.innerHTML = "Please wait...";
  
//  console.log("Please wait...");

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
