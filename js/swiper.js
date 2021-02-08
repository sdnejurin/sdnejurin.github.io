const sliderHero = document.querySelector('.swiper-container-hero');
const sliderGallery = document.querySelector('.swiper-container-gallery');
const sliderPublications = document.querySelector('.swiper-container-publications');
const sliderProjects = document.querySelector('.swiper-container-projects');
const sliderMobileEvents = document.querySelector('.swiper-container-events');

	let mySwiperHero = new Swiper(sliderHero, {
		loop:true,
		autoplay: {
			delay: 7000,
		},
		effect: 'fade',
		speed: 3000,
	});

	let mySwiperGallery = new Swiper(sliderGallery, {
		slidesPerView: 1,
		slidesPerColumn: 1,
		slidesPerColumnFill: 'row',
		slidesPerGroup: 1,
		spaceBetween: 34,
		navigation: {
			nextEl: '.gallery-nav__btn--next',
			prevEl: '.gallery-nav__btn--prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		breakpoints: {
			680: {
				spaceBetween: 34,
				slidesPerView: 2,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				slidesPerGroup: 2,
			},
			1200: {
				spaceBetween: 34,
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				slidesPerGroup: 3,
			},
			1500: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerColumnFill: 'row',
				slidesPerGroup: 3,
			},
		},
	});

	let mySwiperProjects = new Swiper(sliderProjects, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 50,
		navigation: {
			nextEl: '.partners-nav__btn--next',
			prevEl: '.partners-nav__btn--prev',
		},
		breakpoints: {
			680: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1025: {
				spaceBetween: 50,
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
		},
	});

let mySwiperMobileEvents;
let mySwiperPublications;

function mobileSlider() {
	if (window.innerWidth <= 680 && sliderMobileEvents.dataset.mobile == 'false') {
		mySwiperMobileEvents = new Swiper(sliderMobileEvents, {
			slidesPerView: 1,
			spaceBetween: 15,
			slideClass: 'events-card',
			pagination: {
				el: '.events-cards__pagination',
				clickable: true,
			},
		});

		sliderMobileEvents.dataset.mobile = 'true';
	}

	if (window.innerWidth > 680) {
		sliderMobileEvents.dataset.mobile = 'false';

		if (sliderMobileEvents.classList.contains('swiper-container-initialized')) {
			mySwiperMobileEvents.destroy();
		}
	}
}

function mobileSliderPublications() {
	if (window.innerWidth > 680) {
		mySwiperPublications = new Swiper(sliderPublications, {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 34,
			navigation: {
				nextEl: '.publications-nav__btn--next',
				prevEl: '.publications-nav__btn--prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
			breakpoints: {
				1367: {
					spaceBetween: 50,
					slidesPerView: 3,
					slidesPerGroup: 3,
				},

				1024: {
					spaceBetween: 50,
				},
			},
		});

		sliderPublications.dataset.mobile = 'false';
	}

	if (window.innerWidth <= 680 && sliderPublications.dataset.mobile == 'false') {
		sliderPublications.dataset.mobile = 'true';

		if (sliderPublications.classList.contains('swiper-container-initialized')) {
			mySwiperPublications.destroy();
		}
	}
}

mobileSlider();
mobileSliderPublications();

window.addEventListener('resize' , () => {
	mobileSlider();
	mobileSliderPublications();
});
