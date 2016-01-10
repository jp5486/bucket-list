
Navbar = React.createClass({

	hidePage() {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},

	renderHome () {
		this.hidePage();
	},

  renderBucketList () {
		this.hidePage();
		ReactDOM.render(<BucketList />, document.getElementById('render-quad1'));
  },

	renderEvents () {
		this.hidePage();
	},

	renderFriends () {
		this.hidePage();
	},

	render (){
		return (
			<nav className="navbar">
				<div className="container">
					<a href="#" onClick={this.renderHome}>Home</a>
					
					<a href="#" onClick={this.renderBucketList}>Bucket List</a>
					
					<a href="#" onClick={this.renderEvents}>Events</a>
					<a href="#" onClick={this.renderFriends}>Friends</a>
				</div>
			</nav>
		)
	}
});

