EditForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
	},
	render () {
		return (
			<form>
				<input
				 ref="text"
         placeholder="edit"/>
			</form>
		)
	}
})


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

	renderDetails () {
		var targetItem = this.props.bucketitem
		console.log(targetItem.text);
		ReactDOM.unmountComponentAtNode(document.getElementById("render-quad1"))
		ReactDOM.render(<EditForm />, document.getElementById('render-quad1'));
    
	  
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
					// readOnly={true}
					checked={this.props.bucketitem.checked}
					onClick={this.toggleChecked} />

				<span className="text" onClick={this.renderDetails}>{this.props.bucketitem.text}</span>
				<div id="details"></div>
 
			</li>
		);
	}
});
