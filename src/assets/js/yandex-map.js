// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
function init(){
		// Создание карты.
		var myMap = new ymaps.Map("js-map", {
				// Координаты центра карты.
				// Порядок по умолчанию: «широта, долгота».
				// Чтобы не определять координаты центра карты вручную,
				// воспользуйтесь инструментом Определение координат.
				center: [34.869497, -111.760186],
				// Уровень масштабирования. Допустимые значения:
				// от 0 (весь мир) до 19.
				zoom: 7
		});
}
ymaps.ready(init);