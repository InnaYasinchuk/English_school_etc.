
// SWIPER TEACHERS

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






// Contact Form

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    // Очищення вмісту result перед відправкою нового запиту
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async(response) => {
            let json = await response.json();
            if (response.status == 200) {
                // Зміна тексту повідомлення про успішне відправлення
                result.innerHTML = "Your custom success message"; // Встановлення вашого власного тексту повідомлення
               
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

