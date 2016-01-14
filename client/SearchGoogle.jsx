SearchGoogle = React.createClass({
  searchEvent(){
    var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: this.props.query,
          radius: 500,
          types: ['store']
        }, callback);
      return service;
  },

  searchCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  },

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
  },

  render(){
    return(
      <div></div>
    );
  }
});