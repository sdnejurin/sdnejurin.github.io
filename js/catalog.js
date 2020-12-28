document.addEventListener('DOMContentLoaded', () => {
	let catalog = document.querySelector('.catalog');
	let dates = document.querySelector('.dates');

	if (catalog) {
		let catalogBottom = document.querySelectorAll('.catalog__bottom');
		let buttonsAll = document.querySelectorAll('.catalog__btn');

		buttonsAll.forEach(el => {
			el.addEventListener('click', (e) => {
				let clickedElement = e.target.closest('[data-path-catalog]');
				let dataElement = clickedElement.dataset.pathCatalog;
				let currentCatalog = document.querySelector(`[data-target-catalog="${dataElement}"]`);


				catalogBottom.forEach(el => {el.classList.remove('catalog-bottom--active')});
				buttonsAll.forEach(el => {el.classList.remove('catalog__btn--focused')});
				currentCatalog.classList.toggle('catalog-bottom--active');
				clickedElement.classList.toggle('catalog__btn--focused');
			});
		});
	};

	if (dates) {
		let datesPainterAll = document.querySelectorAll('.dates__painter');

		datesPainterAll.forEach(el => {
			el.addEventListener('click', (e) => {
				let clickedElement = e.target.closest('.dates__painter');
				let currentImg = clickedElement.closest('.catalog__bottom').querySelector('.painter__img');
				let currentSubtitle = clickedElement.closest('.catalog__bottom').querySelector('.painter__subtitle');
				let currentDate = clickedElement.closest('.catalog__bottom').querySelector('.painter__date');
				let currentDesc = clickedElement.closest('.catalog__bottom').querySelector('.painter__desc');

				if (clickedElement) {

					datesPainterAll.forEach(el => {el.classList.remove('dates__painter--is-active')});
					clickedElement.classList.add('dates__painter--is-active');
					currentImg.setAttribute('src', e.target.dataset.painterSrc);
					currentSubtitle.innerHTML = clickedElement.textContent;
					currentDate.innerHTML = clickedElement.dataset.painterDate;
					currentDesc.innerHTML = clickedElement.nextElementSibling.textContent;
				};
			});
		});
	};
});
