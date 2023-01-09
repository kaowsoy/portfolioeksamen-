const photos = Array.from(document.querySelectorAll('.photo'));

const scalingImage = (currentPhoto => {
  currentPhoto.classList.add("scaleImage");
  
  setTimeout(() => {
    currentPhoto.classList.remove('scaleImage');
  }, 4500);
})

photos.map((photo) => {
  photo.addEventListener('click', Event => {
    scalingImage(Event.target);
  })
});





/* let timeinterval = setInterval(nextimages, 4000);

const buttons = document.querySelectorAll("[data-carousel-button]");


function nextimages() {
  let button = document.querySelector("#carousel");
  const offset = button.dataset.carouselButton === "next" ? -1 : 1;
  const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active; 
} */