Meteor.subscribe("bucketitems");
Meteor.subscribe("userData");
Meteor.subscribe("categories");
Meteor.subscribe("allUserData");
Meteor.subscribe("markers");
Meteor.subscribe("events");
Meteor.subscribe("images");

Meteor.startup(function () {
	ReactDOM.render(<Navbar />, document.getElementById("render-navbar"));
	ReactDOM.render(<Footer />, document.getElementById("render-footer"));
  ReactDOM.render(<Login />, document.getElementById("render-login"));
  // ReactDOM.render(<StaticSlider />, document.getElementById("render-quad4"));
  ReactDOM.render(<AutoSlider />, document.getElementById("render-home"));
  ReactDOM.render(<HomeText />, document.getElementById("render-quad2"));

  // ReactDOM.render(<StaticSlider />, document.getElementById("render-quad4"));

	// ReactDOM.render(<BucketList />, document.getElementById("render-quad1"));

  // ReactDOM.render(<Events />, document.getElementById("render-quad2"));
  // ReactDOM.render(<CategoriesReact />, document.getElementById("render-quad2"));

	// ReactDOM.render(<Map />, document.getElementById("render-quad3"));

});
