document.addEventListener('DOMContentLoaded', () => {
	let catalog = document.querySelector('.catalog');
	let buttonsList = document.querySelector('.catalog__btns');
	let catalogBottom = document.querySelectorAll('.catalog__bottom');
	let buttonsAll = document.querySelectorAll('.catalog__btn');

	if (catalog) {
		buttonsList.addEventListener('click', (e) => {
			let clickedElement = e.target.closest('[data-path-catalog]');
			let dataElement = clickedElement.dataset.pathCatalog;
			let currentCatalog = document.querySelector(`[data-target-catalog="${dataElement}"]`);


			catalogBottom.forEach(el => {el.classList.remove('catalog-bottom--active')});
			buttonsAll.forEach(el => {el.classList.remove('catalog__btn--focused')});
			currentCatalog.classList.toggle('catalog-bottom--active');
			clickedElement.classList.toggle('catalog__btn--focused');
		});
	};
});
