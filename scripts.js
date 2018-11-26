console.log(123);

let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let currentSlide = 0;

const reset = () => {
  sliderImages.forEach(img => {
    img.style.display = "none";
  });
};

const startSlide = () => {
  reset();
  sliderImages[currentSlide].style.display = "block";
};

startSlide();

const slideLeft = () => {
  reset();
  sliderImages[currentSlide - 1].style.display = "block";
  currentSlide--;
};

const slideRight = () => {
  reset();

  if (currentSlide === sliderImages.length - 1) {
    currentSlide = -1;
  }
  sliderImages[currentSlide + 1].style.display = "block";
  console.log(currentSlide);

  currentSlide++;
  console.log(currentSlide);
};

arrowLeft.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(autoRight);

  if (currentSlide === 0) {
    currentSlide = sliderImages.length;
  }

  slideLeft();

  autoRight = setInterval(slideRight, 3000);
});

arrowRight.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(autoRight);

  if (currentSlide === sliderImages.length - 1) {
    currentSlide = -1;
  }
  slideRight();

  autoRight = setInterval(slideRight, 3000);
});

let autoRight = setInterval(slideRight, 3000);

