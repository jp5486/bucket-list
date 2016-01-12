Meteor.subscribe("bucketitems");
Meteor.subscribe("userData");
Meteor.subscribe("categories");
Meteor.subscribe("allUserData");

Meteor.startup(function () {
	ReactDOM.render(<Navbar />, document.getElementById("render-navbar"));
  ReactDOM.render(<Login />, document.getElementById("render-login"));
	ReactDOM.render(<BucketList />, document.getElementById("render-quad1"));
  // ReactDOM.render(<Events />, document.getElementById("render-quad2"));
  ReactDOM.render(<CategoriesReact />, document.getElementById("render-quad2"));

	// ReactDOM.render(<Quad2 />, document.getElementById("render-quad2"));
	// ReactDOM.render(<Quad3 />, document.getElementById("render-quad3"));
	// ReactDOM.render(<Quad4 />, document.getElementById("render-quad4"));
});
