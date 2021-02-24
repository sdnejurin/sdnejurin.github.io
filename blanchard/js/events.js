document.addEventListener('DOMContentLoaded', () => {
	let cards = document.querySelector('.events-cards');
	let button = document.querySelector('.events__btn');

	if (cards) {
		let hiddenCards = document.querySelectorAll('.events-cards .events-card:nth-child(n+4)');

		button.addEventListener('click', function() {
			hiddenCards.forEach(el => {
				el.style.display = 'inline-flex';
			});
			button.style.display = 'none';
		});
	};
});
