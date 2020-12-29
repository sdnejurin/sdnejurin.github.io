document.addEventListener('DOMContentLoaded', () => {
	let cards = document.querySelector('.events-cards');
	let button = document.querySelector('.events__btn');

	if (cards) {
		let hiddenCards = document.querySelectorAll('.events-card--is-hidden');
		button.addEventListener('click', function() {
			hiddenCards.forEach(el => {
				el.classList.add('events-card--is-active');
			})
			button.classList.add('events__btn--is-hidden');
		})
	};
});
