BucketItemReact = React.createClass({
	propTypes: {
		bucketitem: React.PropTypes.object.isRequired
	},

	toggleChecked() {
		BucketItemsCollection.update(this.props.bucketitem._id, {
			$set: {checked: ! this.props.bucketitem.checked}
		})
	},

	deleteThisBucketItem() {
		BucketItemsCollection.remove(this.props.bucketitem._id);
	},

	render() {
		const itemClassName = this.props.bucketitem.checked ? "checked" : "";
		return (
			<li>
				<button className="delete" onClick={this.deleteThisBucketItem}>
					&times;
				</button>

				<input
					type="checkbox"
					readOnly={true}
					checked={this.props.bucketitem.checked}
					onClick={this.toggleChecked} />

				<span className="text">{this.props.bucketitem.text}</span>
			</li>
		);
	}
});