
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');

menu.addEventListener('click', () => {

  menu.style.display = 'none';
  nav.style.display = 'block';
  close.style.display = 'block';

});

close.addEventListener('click', () => {
  nav.style.display = 'none';
  menu.style.display = 'block';
  close.style.display = 'none';
});



//to top button code
const toTop = document.querySelector('.toTop');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 400) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});