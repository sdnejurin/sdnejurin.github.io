document.addEventListener('DOMContentLoaded', () => {
	let category = document.querySelector('.category')
	let categoryBtn = document.querySelector('.category__btn');
	let popup = document.querySelector('.category__wrapper');
	let svg = document.querySelector('.category__svg')

	if (category) {
		categoryBtn.addEventListener('click', (e) => {
			e.preventDefault();
			popup.classList.toggle('category__wrapper--active');
			svg.classList.toggle('svg--rotate');
		});
	};
});
