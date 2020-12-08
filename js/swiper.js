const slideHero = document.querySelector('.swiper-container-hero');
const slideGallery = document.querySelector('.swiper-container-gallery');



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
	spaceBetween: 50,
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
	},
	pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});
