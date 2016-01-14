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

  render () {
    return (
      <div>
        <div id="map-gic"></div>
        < DisplayEventForm />
      </div>

    )
    }
});


var EventForm = React.createClass({
  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
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

  addLocation (event) {
    event.preventDefault();
    this.codeAddress();
    var eventNameVar = document.getElementById("locationName").value
    var eventAddressVar = document.getElementById("address").value
    MarkersList.insert({name: eventNameVar, address: eventAddressVar});
    console.log("MarkersList::")
    console.log(MarkersList);
  },

  render: function() {
    return (
      <form onSubmit= {this.addLocation}>
        {this.props.children}
      </form>
    );
  }
});

EventForm.Input = React.createClass({
  render() {
    return <input id={this.props.inputid} type="text" ref={this.props.inputref} onChange={this.handleChange} />
  }
});

EventForm.Label = React.createClass({
  render() {
    return(<label>{this.props.labeltext}</label>)
  }
});

EventForm.SubmitBut = React.createClass({
  render() {
      return(<input type="submit" value={this.props.submitvalue} />)
  }
});

var DisplayEventForm = React.createClass({

  addEvent () {
    var eventPropsVar = {}
    var Form = EventForm;
    return (
      <Form>
        <Form.Label labeltext={"Location Name: "} />
        <Form.Input inputid="locationName"inputref="location" />
        <Form.Label labeltext="Address" />
        <Form.Input inputid="address" inputref="address" />
        <Form.SubmitBut submitvalue="Add Location" />
      </Form>
    );
  },

  render () {
    return (
      <div id="eventbox">
        <this.addEvent/>
      </div>
    );
  }
});