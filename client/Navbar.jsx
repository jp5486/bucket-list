
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

	selectBucketList() {
		rerturn (
			$('.bucket-list-item')
			)
	},

	renderHomePage() {
		this.hidePage()
  	
	},

	render (){
		return (
			<nav className="navbar">	
				<a href="#" onClick={this.renderHomePage.bind()}>Home</a>
				<a href="#" onClick={this.renderEventsPage.bind()}>Bucket List</a>
				<a href="#" onClick={this.renderEventsPage.bind()}>Events</a>
				<a href="#" onClick={this.renderEventsPage.bind()}>Friends</a>
			</nav>
		)
	}
});
					// <a href="#" onClick={this.alert.bind(this, 'Friends')}>Friends</a>


