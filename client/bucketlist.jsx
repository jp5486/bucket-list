Bucketlist = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			buecketitems: BucketItems.find({}, {sort: {createdAt: -1}}).fetch()
		}
	},

	renderBucketItems() {
		return this.data.buecketitems.map((bucketitem) => {
			return <Bucketitem key={bucketitem._id} bucketitem={bucketitem} />;
		});
	},	

	handleSubmit(event) {
		event.preventDefault();

		var text = React.findDOMNode(this.refs.textInput).value.trim();

		BucketItems.insert({
			text: text,
			cratedAt: new Date()
		});

		React.findDOMNode(this.refs.textInput).value = ""
	},

	render() {
		return (
			<div className="container"> 
				<header>
					<h1>Bucket List</h1>
					<form className="new-bucketitem" onSubmit={this.handleSubmit}>
						<input
							type="text"
							ref="textInput"
							placeholder="Type to add new item to your bucket list" />
					</form>
				</header>

				<ul>
					{this.renderBucketItems()}
				</ul>	
			</div>
			);	
	}
});