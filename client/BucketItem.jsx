BucketItemReact = React.createClass({
	propTypes: {
		bucketitem: React.PropTypes.object.isRequired
	},

	toggleChecked() {
		BucketItemsCollection.update(this.props.bucketitem._id, {
			$set: {checked: ! this.props.bucketitem.checked}
		})
	},
	showBucketItemDetails(){
		var currentItem = BucketItemsCollection.find(this.bucketitem._id)

	},

	updateThisBucketItem(event) {
		event.preventDefault();
		var newtext = this.state.text.trim();
		BucketItemsCollection.update(this.props.bucketitem._id, {text: newtext})
	},

	deleteThisBucketItem() {
		BucketItemsCollection.remove(this.props.bucketitem._id);
	},

	handleTextChange(event){
		this.setState({text: event.target.value})
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

			<form className="editform" onSubmit={this.updateThisBucketItem}>
				<input
					type="text" 
					name="updatedText"
					placeholder="Please don't leave blank"
					onChange={this.handleTextChange}
					defaultValue={this.props.bucketitem.text}
				/>
				<input type="submit" value="Update This Item"/>
			</form>
				
			</li>
		);
	}
});