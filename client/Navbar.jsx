
Navbar = React.createClass({

	hidePage() {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},

	renderHome () {
		this.hidePage();
		ReactDOM.render(<BucketList />, document.getElementById('render-quad1'));
    ReactDOM.render(<CategoriesReact />, document.getElementById("render-quad2"));
	},

  renderBucketList () {
		this.hidePage();
		ReactDOM.render(<BucketList />, document.getElementById('render-quad1'));
    // ReactDOM.render(<CategoriesReact />, document.getElementById("render-quad2"));

  },

	renderEvents () {
		this.hidePage();
		ReactDOM.render(<Events />, document.getElementById('render-quad2'));

	},

	renderFriends () {
		this.hidePage();
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
	render (){
		return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand glyphicon glyphicon-fire" href="#"></a>
			    </div>
			    <div className="collapse navbar-collapse" id="myNavbar">
			      <ul className="nav navbar-nav">
							<li className= "Active" role="presentation"><a href="#" onClick={this.renderHome}>Home</a></li>
							<li role="presentation"><a href="#" onClick={this.renderBucketList}>Personal Bucket List</a></li>
							<li role="presentation"><a href="#" onClick={this.renderEvents}>Events</a></li>
							<li role="presentation"><a href="#" onClick={this.renderFriends}>Friends</a></li>
			      </ul>
			      <div className="nav navbar-nav navbar-right">
			        <div id="render-login"></div>
			      </div>
			    </div>
			  </div>
			</nav>
		)
	}
});
