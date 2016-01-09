
Navbar = React.createClass({
	
	hidePage() {
		$('#render-quad1').children().hide()
		$('#render-quad2').children().hide()
		$('#render-quad3').children().hide()
		$('#render-quad4').children().hide()

	},
	renderEventsPage() {
		this.hidePage()
	}, 

	renderHomePage() {
		this.hidePage()	
	},

	render (){
		return (
			<nav className="navbar">	
				<div className="container">
					<a href="#" onClick={this.renderHomePage}>Home</a>
					<a href="#" onClick={this.renderEventsPage}>Bucket List</a>
					<a href="#" onClick={this.renderEventsPage}>Events</a>
					<a href="#" onClick={this.renderEventsPage}>Friends</a>
				</div>
			</nav>
		)
	}
});
				
