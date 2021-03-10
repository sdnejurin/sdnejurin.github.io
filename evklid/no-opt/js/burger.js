document.querySelector('#burger').addEventListener('click', function() {
	const menuActive = document.querySelector('#menu');
	const burgerActive = document.querySelector('#burger');

	menuActive.classList.toggle('menu--active');
	burgerActive.classList.toggle('burger--active');
});
