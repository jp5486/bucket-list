var geocoder;
var map;
var currentLocation;

Map = React.createClass({

    initialize: function(location) {

        currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

        var mapOptions = {
          center: currentLocation,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map-gic"),
            mapOptions);

        var infoWindowContent =   '<div class="info_content">' +
                                  '<h3>Title Here</h3>' +
                                  '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente totam exercitationem molestiae possimus.</p>' +
                                  '</div>';

        var infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });

        geocoder = new google.maps.Geocoder();

        var marker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          icon: 'http://i.stack.imgur.com/Kbx0I.png'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map, marker);
        });
    },
    codeAddress: function() {
        var address = document.getElementById("address").value;
        geocoder.geocode( {'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
    },
    getLocation: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.initialize);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    },
    getDefaultProps: function () {
        return {
            initialZoom: 8,
            mapCenterLat: 43.6425569,
            mapCenterLng: -79.4073126,
        };
    },
    componentDidMount: function (rootNode) {
        this.getLocation();
        var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map});
    },
    mapCenterLatLng: function () {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    },
    render: function () {
        return (
            <div id='map-gic'></div>


        );
    }
});