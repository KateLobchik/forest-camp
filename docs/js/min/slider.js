const slider=tns({container:".slider__slides",items:1,controlsContainer:".about-food__slider-controls",navContainer:".slider__slider-pagination"}),menuCarousels=document.querySelectorAll(".menu__slider"),paginationCarousel=document.querySelectorAll(".menu__slider-pagination");for(let e=0;e<menuCarousels.length;e++){tns({container:menuCarousels[e],items:1,controls:!1,autoplay:!0,autoplayTimeout:5e3,autoplayButtonOutput:!1,mouseDrag:!0,swipeAngle:!1,navContainer:paginationCarousel[e]})}