ymaps.ready(init);
var myMap;
function init () {
   myMap = new ymaps.Map("map", {
		center: [51.768000828149475,55.0954161627027],
		behaviors: ['default'], 
		zoom: 12,
		controls: ["zoomControl", "fullscreenControl"],
   });
 myMap.behaviors
        .disable(['rightMouseButtonMagnifier', 'scrollZoom', 'ruler']); 
	myPlacemark2 = new ymaps.Placemark([51.768000828149475,55.0954161627027],{}, { 
	iconLayout: 'default#image',
	iconImageHref: 'icons/pin.svg',
	iconImageSize: [78, 85], 
	iconImageOffset: [-39, -70],
	});
	myMap.geoObjects.add(myPlacemark2);}