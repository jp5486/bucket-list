Footer = React.createClass({

	hidePage () {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-home"))

	},

	renderAbout (event) {
		event.preventDefault();
		this.hidePage();
		ReactDOM.render(<About />, document.getElementById('render-quad1'));
	},

	renderCredits (event) {
		event.preventDefault();
		this.hidePage();
		ReactDOM.render(<Credits />, document.getElementById('render-quad1'));
	},

	render () {
		return (
			<div id="footer">
				<div id="bot-margin" className="navbar navbar-default navbar-bottom">
					<a href="#" className="navbar-text pull-left" onClick={this.renderAbout}>About</a>
					<a href="#" className="navbar-text pull-left" onClick={this.renderCredits}>Credits</a>
					<a className="navbar-text pull-right" href="https://github.com/huangkc/bucket-list/tree/development"> Check us out on <img id="github-link" src='GitHubLogo.png' /></a>
				</div>
			</div>

	  )
	}
})