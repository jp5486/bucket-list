
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

	renderEventsPage() {
		this.hidePage();
	},

	render (){
		return (
			<nav className="navbar">
				<div className="container">
					<a href="#" onClick={this.renderHomePage}>Home</a>
					<a href="#" onClick={this.renderHomePage}>Bucket List</a>
					<a href="#" onClick={this.renderEventsPage}>Events</a>
					<a href="#" onClick={this.renderEventsPage}>Friends</a>
				</div>
			</nav>
		)
	}
});

