const slider = tns({
  container: '.slider__slides',
  items: 1,
  controlsContainer: '.about-food__slider-controls',
  navContainer: '.slider__slider-pagination',
});


const menuCarousels = document.querySelectorAll('.menu__slider');

for (let menuCarousel of menuCarousels) {
  const carousel = tns({
    container: menuCarousel,
    items: 1,
    autoWidth: true,
    controls: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    mouseDrag: 'mouseDrag',
  });
}
