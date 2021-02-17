document.addEventListener('DOMContentLoaded', () => {
	let headerTop = document.querySelector('.header-top');
	let headerTopSearch = headerTop.querySelector('.header-top__search');
	let searchBtn = headerTop.querySelector('.search-btn');
	let searchBtnClose = headerTop.querySelector('.search-btn-close');
	let searchWrapper = headerTop.querySelector('.header-top__wrapper');
	let containerSearchActive = headerTop.querySelector('.header__container');
	let headerLogo = headerTop.querySelector('.header-top__logo');
	let burgerBtn = headerTop.querySelector('.burger-btn');

	function mobileSearch() {
		if (window.innerWidth <= 992) {
			searchBtn.addEventListener('click', (e) => {
				searchWrapper.classList.add('header-top__wrapper--active');
				containerSearchActive.classList.add('header__container--search-active');
				burgerBtn.classList.add('burger-btn--search-active');
				headerLogo.classList.add('header-top__logo--search-active');
			});
			searchBtnClose.addEventListener('click', (e) => {
				searchWrapper.classList.remove('header-top__wrapper--active');
				containerSearchActive.classList.remove('header__container--search-active');
				burgerBtn.classList.remove('burger-btn--search-active');
				headerLogo.classList.remove('header-top__logo--search-active');
			});
		};

		if (window.innerWidth > 992) {
			searchBtn.addEventListener('click', (e) => {
				searchWrapper.classList.toggle('header-top__wrapper--active');
			});
		};
	};

	mobileSearch();
});
