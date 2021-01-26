const slideHero = document.querySelector('.swiper-container-hero');
const slideGallery = document.querySelector('.swiper-container-gallery');
const slidePublications = document.querySelector('.swiper-container-publications');
const slideProjects = document.querySelector('.swiper-container-projects');


let mySwiperHero = new Swiper(slideHero, {
	loop:true,
  autoplay: {
		delay: 7000,
	},
	effect: 'fade',
	speed: 3000,
});

let mySwiperGallery = new Swiper(slideGallery, {
	slidesPerView: 3,
	slidesPerColumn: 2,
	slidesPerColumnFill: 'row',
	slidesPerGroup: 3,
	spaceBetween: 25,
	navigation: {
    nextEl: '.gallery-nav__btn--next',
    prevEl: '.gallery-nav__btn--prev',
	},
	pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
	},
	breakpoints: {
		1500: {
			spaceBetween: 50,
			slidesPerView: 3,
			slidesPerColumn: 2,
			slidesPerColumnFill: 'row',
			slidesPerGroup: 3,
		},
	},
});

let mySwiperPublications = new Swiper(slidePublications, {
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 25,
	navigation: {
    nextEl: '.publications-nav__btn--next',
    prevEl: '.publications-nav__btn--prev',
	},
	pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
	},
	breakpoints: {
		1500: {
			spaceBetween: 50,
		},
	},
});

let mySwiperProjects = new Swiper(slideProjects, {
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 50,
	navigation: {
    nextEl: '.partners-nav__btn--next',
    prevEl: '.partners-nav__btn--prev',
	},
});
