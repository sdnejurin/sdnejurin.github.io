// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
	// Создание карты.

	var myMap = new ymaps.Map(document.querySelector('.yandex-map'), {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [55.762,37.6451],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 14,
	});


	// // Размещение геообъекта на карте.
	// myMap.geoObjects.add(myGeoObject);

	var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/icons/marker-ymaps.svg',
    iconImageSize: [20, 20],
	});

	myMap.geoObjects.add(myPlacemark);
	myMap.controls.remove('default');

	if (window.innerWidth <= 1920) {
		myMap.setCenter([55.762,37.6451]);
	}

	if (window.innerWidth <= 1800) {
		myMap.setCenter([55.762,37.637]);
	}

	if (window.innerWidth <= 1550) {
		myMap.setCenter([55.762,37.632]);
	}

	if (window.innerWidth <= 1300) {
		myMap.setCenter([55.762,37.625]);
	}

	if (window.innerWidth <= 1024) {
		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('drag');
	}
}
