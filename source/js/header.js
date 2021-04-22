{
  const buttonPhone = document.querySelector('.header-contacts__toggle');
  const phoneList = document.querySelector('.header-contacts__phone-numbers');
  const buttonNav = document.querySelector('.main-nav__nav-toggle');
  const navList = document.querySelector('.main-nav__list');
  const description = document.querySelector('.page-header__desctiption');


  buttonPhone.classList.remove('header-contacts__toggle--active');
  phoneList.classList.remove('header-contacts__phone-numbers--active');

  buttonNav.classList.remove('main-nav__nav-toggle--active');
  buttonNav.classList.add('main-nav__nav-toggle--closed');
  navList.classList.remove('main-nav__list--active');
  navList.classList.remove('main-nav__list--nojs');


  description.classList.remove('page-header__desctiption--nojs');

  const isActiveDescription = () => {
    return (description.classList.contains('page-header__desctiption--open-phone') || description.classList.contains('page-header__desctiption--open-menu'));
  }

  const activeClassOfDescription = (class1, class2) => {
    if (description.classList.contains(class1)) {
      description.classList.remove(class1);
      description.classList.add(class2);
    } else {
      description.classList.remove(class2);
    }
  }

  buttonPhone.addEventListener('click', function (evt) {
    if (buttonNav.classList.contains('main-nav__nav-toggle--active')) {
      buttonNav.classList.remove('main-nav__nav-toggle--active');
      buttonNav.classList.add('main-nav__nav-toggle--closed');
      navList.classList.remove('main-nav__list--active');
    }

    buttonPhone.classList.toggle('header-contacts__toggle--active');
    phoneList.classList.toggle('header-contacts__phone-numbers--active');

    if (isActiveDescription()) {
      activeClassOfDescription('page-header__desctiption--open-menu', 'page-header__desctiption--open-phone');
    } else {
      description.classList.add('page-header__desctiption--open-phone');
    }
  });


  buttonNav.addEventListener('click', function (evt) {
    if (buttonPhone.classList.contains('header-contacts__toggle--active')) {
      buttonPhone.classList.remove('header-contacts__toggle--active');
      phoneList.classList.remove('header-contacts__phone-numbers--active');
    }

    buttonNav.classList.toggle('main-nav__nav-toggle--active');
    buttonNav.classList.toggle('main-nav__nav-toggle--closed');
    navList.classList.toggle('main-nav__list--active');

    if (isActiveDescription()) {
      activeClassOfDescription('page-header__desctiption--open-phone', 'page-header__desctiption--open-menu');
    } else {
      description.classList.add('page-header__desctiption--open-menu');
    }
  });

};
