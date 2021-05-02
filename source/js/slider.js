const slider = tns({
  container: '.slider__slides',
  items: 1,
  // controlsContainer: '.about-food__slider-controls',
  prevButton: '.about-food__button-back',
  nextButton: '.about-food__button-next',
  navContainer: '.slider__slider-pagination',
  mouseDrag: true,
  swipeAngle: false,
});


const menuCarousels = document.querySelectorAll('.menu__slider');
const paginationCarousel = document.querySelectorAll('.menu__slider-pagination');

for (let i = 0; i < menuCarousels.length; i++) {
  const carousel = tns({
    container: menuCarousels[i],
    items: 1,
    controls: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    mouseDrag: true,
    swipeAngle: false,
    navContainer: paginationCarousel[i],
  });
}
