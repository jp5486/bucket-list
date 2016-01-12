BucketItemsByCategory = React.createClass({

propTypes: {
    bucketItem: React.PropTypes.object.isRequired

  },

render () {
	return (
		<li>{this.props.bucketItem.title}</li>
	) 
}

})