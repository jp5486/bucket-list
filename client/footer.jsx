Footer = React.createClass({

	hidePage () {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},
	
	renderAbout () {
		this.hidePage();
		ReactDOM.render(<About />, document.getElementById('render-quad1'));
	},

	renderCredits () {
		this.hidePage();
		ReactDOM.render(<Credits />, document.getElementById('render-quad1'));
	},

	render () {
		return (
			<nav className="footer">
				<ul className="nav nav-tabs">
					<li role="presentation"><a href="#" onClick={this.renderAbout}>About</a></li>
					<li role="presentation"><a href="#" onClick={this.renderCredits}>Credits</a></li>
					<li role="presentation"><a href="https://github.com/jp5486/bucket-list"><img src='GitHubLogo.png' /></a></li>
				</ul>
			</nav>			

	  ) 
	}
})