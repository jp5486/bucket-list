
Navbar = React.createClass({

	hidePage() {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-home"))

	},

	renderHome (event) {
		event.preventDefault();
		this.hidePage();
		if(Meteor.user()==null){
			ReactDOM.render(<StaticSlider />, document.getElementById('render-home'))
		ReactDOM.render(<HomeText />, document.getElementById('render-quad2'))
			} else {
			ReactDOM.render(<BucketList />, document.getElementById('render-quad1'));
  	  // ReactDOM.render(<CategoriesReact />, document.getElementById("render-quad2"));
  	  ReactDOM.render(<Map />, document.getElementById("render-quad3"));
  	}
	},

  renderBucketList (event) {
  	event.preventDefault();
		this.hidePage();
		ReactDOM.render(<BucketList />, document.getElementById('render-quad1'));
    // ReactDOM.render(<CategoriesReact />, document.getElementById("render-quad2"));
  },

	renderEvents (event) {
		event.preventDefault();
		this.hidePage();
		ReactDOM.render(<Events />, document.getElementById('render-quad2'));
	},

	// render (){
	// 	return (
	// 		<nav className="navbar">
	// 			<ul className="nav nav-tabs">
	// 				<li role="presentation"><a href="#" onClick={this.renderHome}>Home</a></li>
	// 				<li role="presentation"><a href="#" onClick={this.renderBucketList}>Bucket List</a></li>
	// 				<li role="presentation"><a href="#" onClick={this.renderEvents}>Events</a></li>
	// 				<li role="presentation"><a href="#" onClick={this.renderFriends}>Friends</a></li>
	// 			</ul>
	// 		</nav>
	// 	)
	// }
	renderLandingPage(event){
		event.preventDefault();
		this.hidePage();
		ReactDOM.render(<AutoSlider />, document.getElementById('render-home'));
		ReactDOM.render(<HomeText />, document.getElementById('render-quad2'));
	},

	render (){
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a onClick={this.renderLandingPage} className="navbar-brand glyphicon glyphicon-fire" href="#"></a>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">

			      <ul className="nav navbar-nav">
							<li className= "Active" role="presentation"><a href="#" onClick={this.renderHome}>Home</a></li>
							<li role="presentation"><a href="#" onClick={this.renderBucketList}>Personal Bucket List</a></li>
							// <li role="presentation"><a href="#" onClick={this.renderEvents}></a></li>

			      </ul>
			      	<span id="render-login" className="pull-right"></span>
			    </div>
			  </div>
			</nav>
		)
	}
});
