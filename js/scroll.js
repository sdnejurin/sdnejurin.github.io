$(document).ready(function(){
	$('.nav-top__link').on('click', function(e){
		e.preventDefault();
		if ($(window).innerWidth() <= 1024) {
			let href = '.' + $(this).attr('href');
			let offset = $(href).offset().top;

			$('html, body').animate({
				scrollTop: offset,
			}, 500);
		}
	});
});
