function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.836, -119.46),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  camp.data.forEach(function(site) {
    var marker = new google.maps.Marker({
      position: site.location,
      map: map,
      title: site.name
    });

    var infoWindowString = '<div id="content">'+
    '<h3>'+site.name+'</h3>'+
    '<p>'+site.elevation+'ft</p>'+
    '<p>'+site.description+'</p>'+
    '<ul>'+
    '<li>Group Site: '+site.groupSite+'</li>'+
    '<li>Individual Sites: '+site.sites+'</li>'+
    '<li>Sites: '+site.numOfSites+'</li>'+
    '<li>Cost per Site: '+site.perSiteCost+'</li>'+
    '</ul>'+
    '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: infoWindowString

    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
