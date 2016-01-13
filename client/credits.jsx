Credits = React.createClass({

	hidePage () {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},
	
	render () {
		return (
			<div>
				<ul>
					<li><a href="https://www.meteor.com">Meteor</a></li>
					<li><a href="https://www.mongodb.com">MongoDB</a></li>
					<li><a href="facebook.github.io/react/">React</a></li>
					<li><a href="cordova.apache.org/">Cordova</a></li>
					<li><a href="meteor.com/blaze">Blaze</a></li>
					<li><a href="https://github.com">Github</a></li>
				</ul>
			</div>
	  ) 
	}
})