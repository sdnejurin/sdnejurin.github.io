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

document.addEventListener('DOMContentLoaded', () => {
	let catCon = document.querySelector('.catalog__container');
	let dates = document.querySelector('.dates');
	let datesPainter = document.querySelectorAll('.dates__painter');

	if (dates) {
		catCon.addEventListener('click', (e) => {
			let clickedElement = e.target.closest('.dates__painter');
			let currentImg = clickedElement.closest('.catalog__bottom').querySelector('.painter__img');
			let currentSubtitle = clickedElement.closest('.catalog__bottom').querySelector('.painter__subtitle');
			let currentDate = clickedElement.closest('.catalog__bottom').querySelector('.painter__date');
			let currentDesc = clickedElement.closest('.catalog__bottom').querySelector('.painter__desc');

			if (clickedElement) {

				datesPainter.forEach(el => {el.classList.remove('dates__painter--is-active')});
				clickedElement.classList.add('dates__painter--is-active');
				currentImg.setAttribute('src', e.target.dataset.painterSrc);
				currentSubtitle.innerHTML = clickedElement.textContent;
				currentDate.innerHTML = clickedElement.dataset.painterDate;
				currentDesc.innerHTML = clickedElement.nextElementSibling.textContent;
			}
		})
	}
});
