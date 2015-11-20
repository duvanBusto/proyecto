(function($) {

  Drupal.behaviors.msbloksContactMap = {
    attach: function(context, settings) {
      // DATE-PICKER BLOCK.
      $('html').once('contactpage-map-block', function() {
        $('#map-canvas .user-picture').hide();
        google.maps.event.addDomListener(window, 'load', initialize);
      });
    }
  };

function initialize() {
  var lat = Drupal.settings.msbloksContactMap.lat;
  var lng = Drupal.settings.msbloksContactMap.lng;
  var body = Drupal.settings.msbloksContactMap.body_content;
  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var contentString = '<div class="map-popup" style="height: 100px;"><div class="siteNotice">' + body + '</div></div><div class="infobox-arrow"></div>';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      // icon: 'http://datiadevelop.monetisoft.org/sites/ms/files/marcador.png'
  });
  var infoboxOptions = {
    content: contentString,
    position: myLatlng,
    closeBoxMargin: "10px 2px 2px 2px",
    closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
    isHidden: false,
    pane: "floatPane",
    enableEventPropagation: false
  };

  var infobox = new InfoBox(infoboxOptions);
  infobox.open(map, marker);
  google.maps.event.addListener(marker, 'click', function() {
    infobox.open(map, marker);
  });
}

})(jQuery);
