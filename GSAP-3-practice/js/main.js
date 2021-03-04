document.addEventListener('DOMContentLoaded', () => {
  function heroAnimation() {
    let tl = gsap.timeline();

    tl.from('.hero__title', {opacity: 0, y:80, duration: 1})
      .from('.hero__btn', {opacity: 0, y:80, duration: 1}, "-=1")
      .from('.hero__descr', {opacity: 0, duration: 1})
      .from('.photos__photo--first', {opacity: 0, scale: 0.8, duration: 0.4})
      .from('.photos__photo--second', {opacity: 0, scale: 0.8, duration: 0.4})
      .from('.photos__photo--third', {opacity: 0, scale: 0.8, duration: 0.4})
      .from('.photos__author', {opacity: 0, duration: 0.4})
  }

  heroAnimation();

  function openMenuAnimation() {
    let tl = gsap.timeline();

    tl.from('.menu', {opacity: 0, duration: 1})
      .from('.menu__nav', {opacity: 0, y: 50, duration: 0.5})
      .from('.social', {opacity: 0, y: 50, duration: 0.5}, "-=0.2")
      .from('.menu__right', {opacity: 0, y: 50, duration: 0.5}, "-=0.5")
  };

  let burgerBtn = document.querySelector('.burger');
  let closeBtn = document.querySelector('.close');
  let menu = document.querySelector('.menu');

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      openMenuAnimation();

      menu.classList.add('menu--open');
    });
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('menu--open');
    })
  };
});

