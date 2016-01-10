
Navbar = React.createClass({

	hidePage() {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},

	renderHomePage() {
		this.hidePage();
	},

  renderBucketListPage () {
		this.hidePage();
		ReactDOM.render(<BucketList />, document.getElementById('render-quad1'));
  },

	renderEventsPage() {
		this.hidePage();
	},

	renderFriendsPage() {
		this.hidePage();
	},

	render (){
		return (
			<nav className="navbar">
				<div className="container">
					<a href="#" onClick={this.renderHomePage}>Home</a>
					
					<a href="#" onClick={this.renderBucketListPage}>Bucket List</a>
					
					<a href="#" onClick={this.renderEventsPage}>Events</a>
					<a href="#" onClick={this.renderFriendsPage}>Friends</a>
				</div>
			</nav>
		)
	}
});

