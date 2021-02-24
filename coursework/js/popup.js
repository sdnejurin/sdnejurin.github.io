document.addEventListener('DOMContentLoaded', () => {
	let body = document.querySelector('body');
	let navList = document.querySelector('.nav-bottom__list');
	let popup = document.querySelectorAll('.popup');
	let svg = document.querySelectorAll('.nav-bottom__svg');

	if (navList) {
		body.addEventListener('click', (e) => {
			if (e.target.classList.contains('nav-bottom__link')) {
				let closestItem = e.target.closest('.nav-bottom__item');

				closestItem.lastElementChild.classList.toggle('popup--active');
				if (closestItem.lastElementChild.classList.contains('popup--active') == true) {
					popup.forEach(el => {el.classList.remove('popup--active')});
					closestItem.lastElementChild.classList.toggle('popup--active');
				};
			} else {
				popup.forEach(el => {el.classList.remove('popup--active')});
			};

			if (e.target.classList.contains('nav-bottom__link')) {
				let closestSvg = e.target.closest('.nav-bottom__link');

				closestSvg.lastElementChild.classList.toggle('svg--rotate');
				if (closestSvg.lastElementChild.classList.contains('svg--rotate') == true) {
					svg.forEach(el => {el.classList.remove('svg--rotate')});
					closestSvg.lastElementChild.classList.toggle('svg--rotate');
				};
			} else {
				svg.forEach(el => {el.classList.remove('svg--rotate')});
			};
		});
	};
});
