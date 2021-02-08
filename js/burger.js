document.querySelector('.burger-btn').addEventListener('click', function() {
	let menuActive = document.querySelector('.nav-top');
	let burgerActive = document.querySelector('.burger-btn');

	menuActive.classList.toggle('nav-top--active');
	burgerActive.classList.toggle('burger-btn--active');
});
