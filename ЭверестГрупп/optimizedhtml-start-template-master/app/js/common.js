$(function() {

	$(document).ready(function(){
    $('.container').each(function(){
        var highestBox = 0;
        $('.col-md-6', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.col-md-6',this).height(highestBox);
    });
});
    $(document).ready(function(){
    $('.container').each(function(){
        var highestBox = 0;
        $('.mainPart', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.woman ',this).height(highestBox);
    });
});
	$(document).ready(function(){
    $('.container').each(function(){
        var highestBox = 0;
        $('.feature', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $('.feature ',this).height(highestBox);
    });
});
	
	$(document).ready(function(){
    $(".right_initial").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
	

});

function initMap() {
        var uluru = {lat: 56.831346, lng:  60.598608};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru,
		  disableDefaultUI: true,
		  draggable: false,
		  clickableIcons: false,
		  icons: false
		
        });
	var image = '../img/marker.png'
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
		  icon: image
        });
	var styles =[
	  {
		"featureType": "poi.business",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "labels.text",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  }
	]
	map.setOptions({styles: styles});
}