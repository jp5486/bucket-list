BucketList = React.createClass({
	mixins: [ReactMeteorData],

// grabs data from meteor database
	getMeteorData() {
		return {
			allbucketitems: BucketItemsCollection.find({}, {sort: {createdAt: -1}}).fetch()
		}
	},

// for each item, return a self closing html task object to be rendered through react.
	renderItems() {
		return this.data.allbucketitems.map((bucketitemtobelisted) => {return <BucketItem key={bucketitemtobelisted._id} bucketitem={bucketitemtobelisted} />;
		})
	},

	handleSubmit(event){
		event.preventDefault();

		var text = React.findDOMNode(this.refs.textInput).value.trim();

		BucketItemsCollection.insert({
			text: text,
			cratedAt: new Date(),
			checked: ""
		});

		React.findDOMNode(this.refs.textInput).value = ""
	},

	render() {
		return (
			<div className="bucket-list"> 
				<header>
					<h1>Bucket List</h1>
					<form className="new-listitem" onSubmit={this.handleSubmit}>
						<input
							type="text"
							ref="textInput"
							placeholder="Type to add new items to your list." />
					</form>
				</header>

				<ul>
					{this.renderItems()}
				</ul>	
			</div>
		);
	}


})