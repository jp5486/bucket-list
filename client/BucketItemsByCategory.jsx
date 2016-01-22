BucketItemsByCategory = React.createClass({

propTypes: {
    bucketItem: React.PropTypes.object.isRequired

  },

render () {
	return (
		<li className="list">{this.props.bucketItem.title}</li>
	) 
}

})