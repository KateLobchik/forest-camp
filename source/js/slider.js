const slider = tns({
  container: '.slider__slides',
  items: 1,
  prevButton: '.about-food__button-back',
  nextButton: '.about-food__button-next',
  navContainer: '.slider__slider-pagination',
  mouseDrag: true,
  swipeAngle: false,
  preventScrollOnTouch: 'force',
});


const menuCarousels = document.querySelectorAll('.menu__slider');
const paginationCarousel = document.querySelectorAll('.menu__slider-pagination');

for (let i = 0; i < menuCarousels.length; i++) {
  const carousel = tns({
    container: menuCarousels[i],
    mode: 'gallery',
    items: 1,
    gutter: 2,
    controls: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayButtonOutput: false,
    mouseDrag: true,
    swipeAngle: false,
    preventScrollOnTouch: 'force',
    navContainer: paginationCarousel[i],
  });
}
