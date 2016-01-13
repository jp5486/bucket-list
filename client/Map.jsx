var geocoder;
var map;
var currentLocation;

Map = React.createClass({

  initialize (location) {

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

  codeAddress () {
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

  getLocation () {
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

  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
  },

  addLocation (event) {
    event.preventDefault();
    this.codeAddress();
    var eventNameVar = document.getElementById("locationName").value
    var eventAddressVar = document.getElementById("address").value
    MarkersList.insert({name: eventNameVar, address: eventAddressVar});
    console.log("MarkersList::")
    console.log(MarkersList);
  },

  showEvents () {
    var allEvents = MarkersList.find();
    console.log("One event::");
    console.log(allEvents[1]);
    for(i=0;i<allEvents.count();i++)
    {
      var currentEvent = allEvents[i]
      '<h1>' + currentEvent.name + '</h1>' +
      '<p>Address: ' + currentEvent + '</p>' +
      '<button className="delete">Delete</button>'
    }
  },

  render () {
    return (
          <div>
            <div id='map-gic'></div>
            <div className="addEventForm">
              <form onSubmit= {this.addLocation}>
                <p>Location Name: </p>
                <input
                  id="locationName"
                  type="text"
                  onChange= {this.handleChange}
                  ref="location"
                ></input>
                <p>Address</p>
                <input
                  id="address"
                  type="text"
                  onChange= {this.handleChange}
                  ref="address"
                ></input>
                <input type="submit" value="Add Location"></input>
              </form>
            </div>
            <div>
              {this.showEvents()}
            </div>
        </div>
        );
    }
});