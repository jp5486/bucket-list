
Navbar = React.createClass({

	alert (msg) { 
		alert(msg);
	},

	render (){
		return (
			<nav className="navbar">	
				<div className="container"> 
					<a href="#" onClick={this.alert.bind(this, 'Home')}>Home</a>
					<a href="#" onClick={this.alert.bind(this, 'Bucket List')}>Bucket List</a>
					<a href="#" onClick={this.alert.bind(this, 'Events')}>Events</a>
					<a href="#" onClick={this.alert.bind(this, 'Friends')}>Friends</a>
			  </div>
			</nav>
		)
	}
});


