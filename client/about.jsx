About = React.createClass({

	hidePage () {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},

	render () {
		return (
			<div>
				<p>Bucketlist is a tool for achieving your life goals.</p>
				<p>You can explore thousands of great ideas.</p>
				<p>See how others have achieved their goals.</p>
				<p>Connect with friends and family.</p>
			</div>
	  ) 
	}
})