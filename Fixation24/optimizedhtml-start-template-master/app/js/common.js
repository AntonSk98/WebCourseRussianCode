$(function() {

	ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.711774, 37.773856],
            zoom: 15,
            controls: []
        }, 
        {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true
        })
        myMap.behaviors.disable('scrollZoom');
});
});
