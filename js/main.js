/*global google:false, document:false, camp:false, window:false */
function initialize() {
  var i, clearInfoWindows, infoWindows, mapOptions, map, infoWindowString;

  infoWindows = [];
  clearInfoWindows = function () {
    console.log('clearing infowindows');
    for (i = 0; i < infoWindows.length; i++) {
      infoWindows[i].close();
    }
    infoWindows = [];
  };

  mapOptions = {
    center: new google.maps.LatLng(37.836, -119.46),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  camp.data.forEach(function (site) {
    var marker, infowindow;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(site.location[0],site.location[1]),
      map: map,
      title: site.name
    });

    infoWindowString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h3>' + site.name + '</h3>' +
    '<p>' + site.elevation + 'ft</p>' +
    '<p>' + site.description + '</p>' +
    '<ul>';
    if(site.sites) {
      infoWindowString += '<li>Individual Sites: ' + site.numOfSites + '</li>' +
      '<li>Individual Site Cost per Night: ' + site.perSiteCost + '</li>' +
      '<li>Individual Site Accepts Reservations?: ' + site.sitesAcceptReservations + '</li>';
    } 
    if(site.groupSites) {
      infoWindowString += '<li>Group Sites: ' + site.numOfGroupSites + '</li>' +
      '<li>Group Site Size: ' + site.sizeOfGroupSites + '</li>' +
      '<li>Group Site Cost: ' + site.perGroupSiteCost + '</li>' +
      '<li>Group Site Accepts Reservations: ' + site.groupSitesAcceptReservations + '</li>';
    }
    infoWindowString += '</ul>' +
    '</div>';

    infowindow = new google.maps.InfoWindow({
      content: infoWindowString

    });

    google.maps.event.addListener(marker, 'click', function () {
      clearInfoWindows();
      infoWindows.push(infowindow);
      infowindow.open(map, marker);
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
