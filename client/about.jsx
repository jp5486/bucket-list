About = React.createClass({

	hidePage () {
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad2"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad3"))
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad4"))
	},

	render () {
		return (
			<div className="text-container">
				<p> Bucketlist is a place for you to set your life’s goals and tell your story once they have been accomplished. You can explore great ideas, get inspiration from others, and see how they achieved their goals. Use Bucketlist to find interesting things to do when you travel. You can connect with family and friends and meet people with similar interests. 
				</p>
			</div>
	  ) 
	}
})