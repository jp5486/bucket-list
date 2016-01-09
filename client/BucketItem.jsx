BucketItem = React.createClass({
	propTypes: {
		bucketitem: React.PropTypes.object.isRequired
	},

	render() {
		return (
			<li>
				<span className="text">{this.props.bucketitem.text}</span>
			</li>
		);
	}
})