var navMain = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.header__toggle');

headerToggle.classList.remove('header__toggle--nojs');
navMain.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerToggle.classList.add('header__toggle--close');
    headerToggle.classList.remove('header__toggle--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerToggle.classList.remove('header__toggle--close');
    headerToggle.classList.add('header__toggle--open');
  }
});
