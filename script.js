var typed = new Typed("#element", {
  strings: [" Designer.", "Developer.", "Photographer."],
  typeSpeed: 100,
  loop: true,
  backSpeed: 20,
  backDelay: 1000,
  slidesPerView: 1,
  spaceBetween:40
});
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal", // You can change to 'horizontal' if preferred
  loop: true, // Enable looping

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Make the pagination bullets clickable
  },

  // Autoplay (optional)
  autoplay: {
    delay: 5000, // Delay between slides in milliseconds
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});
document.addEventListener('DOMContentLoaded', function() {
  var clickElements = document.getElementsByClassName("click");
  var swiperslide = document.getElementById('swiper');

  for (let i = 0; i < clickElements.length; i++) {
      clickElements[i].addEventListener('click', function(event) {
          swiperslide.style.display = 'block';
          event.stopPropagation(); // Prevents click from propagating to document
      });
  }

  document.getElementById('exitButton').addEventListener('click', function(event) {
      swiperslide.style.display = 'none';
      event.stopPropagation(); // Prevents click from propagating to document
  });

  document.addEventListener('click', function(event) {
      if (!swiperslide.contains(event.target) && swiperslide.style.display == 'block') {
          swiperslide.style.display = 'none';
      }
  });
});
