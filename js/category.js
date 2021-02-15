document.addEventListener('DOMContentLoaded', () =>{
	let categoryWrapper =  document.querySelector('.category__wrapper');
	let categoryChecked = document.querySelector('.category__checked');
	let categoryBtn = document.querySelector('.category__btn');

	if (categoryWrapper){
		categoryBtn.addEventListener('click', (e) => {
			let categoryLabelsWrapper = categoryWrapper.querySelectorAll('.category__label');
			let arrayCheckedElements = [];

			categoryLabelsWrapper.forEach(el => {
				let checkboxes = el.querySelector('.category__checkbox');

				if (checkboxes.checked == true) {
					arrayCheckedElements.push(el.outerHTML);
				};

				categoryChecked.innerHTML = arrayCheckedElements.join('');
			});

			let categoryLabelsChecked = categoryChecked.querySelectorAll('.category__label');

			categoryLabelsChecked.forEach(el => {
				let fff = el.querySelector('.category__checkbox');
				fff.setAttribute('checked', 'checked');

				el.addEventListener('click', (e) => {
					el.remove();
				});
			});
		});
	};
});
