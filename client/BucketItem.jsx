BucketItemReact = React.createClass({

	propTypes: {
		bucketitem: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			text: this.props.bucketitem.title,
			editing: false
		};
	},

	toggleChecked() {
		BucketItemsCollection.update(this.props.bucketitem._id, {
			$set: {checked: ! this.props.bucketitem.checked}
		})
	},
	showBucketItemDetails(){
		var currentItem = BucketItemsCollection.find(this.bucketitem._id)

	},

	selectThisListItem(){
		$("#"+this.props.bucketitem._id).addClass("selected")
	},

	updateThisBucketItem(event) {
		event.preventDefault();
		var newtitle = this.state.text.trim();
		BucketItemsCollection.update(this.props.bucketitem._id, {title: newtitle})
	},

	deleteThisBucketItem() {
		BucketItemsCollection.remove(this.props.bucketitem._id);
	},

	handleTextChange(event){
		this.setState({text: event.target.value})
	},

	openForm(event){
		this.setState({editing: true})
	},

	closeForm(event) {
		this.setState({editing: false})
	},

	render() {
		const itemClassName = this.props.bucketitem.checked ? "checked" : "";
		return (
			<li id={this.props.bucketitem._id}>
				<button className="delete" onClick={this.deleteThisBucketItem}>
					&times;
				</button>
				<button onClick={this.openForm}>Edit this item</button>

				<input
					type="checkbox"
					// readOnly={true}
					checked={this.props.bucketitem.checked}
					onClick={this.toggleChecked} />
				<span className="text">{this.props.bucketitem.title}</span>
				{(this.state.editing == true)
					? <form className="editform" onSubmit={this.updateThisBucketItem}>
						<input
							type="text" 
							name="updatedText"
							placeholder="Please don't leave blank"
							onChange={this.handleTextChange}
							defaultValue={this.props.bucketitem.title}
						/>
						<input type="submit" value="Update This Item"/>
						<button className="stopediting" onClick={this.closeForm}>Close Edit Form</button>	
					</form>
					: null
				}
			</li>
		);
	}
});
