
Meteor.startup(function () {
	ReactDOM.render(<Navbar />, document.getElementById("render-navbar"));
	ReactDOM.render(<BucketList />, document.getElementById("render-quad1"));
  ReactDOM.render(<Events />, document.getElementById("render-quad2"));
	// ReactDOM.render(<Quad2 />, document.getElementById("render-quad2"));
	// ReactDOM.render(<Quad3 />, document.getElementById("render-quad3"));
	// ReactDOM.render(<Quad4 />, document.getElementById("render-quad4"));


});
