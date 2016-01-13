BucketItemReact = React.createClass({

	propTypes: {
		bucketitem: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			id: this.props.bucketitem._id,
			title: this.props.bucketitem.title,
			description: this.props.bucketitem.description,
			tags: this.props.bucketitem.tags,
			category: this.props.bucketitem.category,
			address: this.props.bucketitem.address,
			rating: this.props.bucketitem.rating,
			editing: false,

			username: this.props.bucketitem.username,
			showDescription: false,
			showAll: false
		};
	},

	toggleChecked() {
		BucketItemsCollection.update(this.props.bucketitem._id, {
			$set: {checked: ! this.props.bucketitem.checked}
		})
	},

	toggleShowAll(event) {
		this.setState({showAll: !this.state.showAll})
	},

	toggleDescription(event){
		this.setState({showDescription: !this.state.showDescription})
	},

	showBucketItemDetails(){
		var currentItem = BucketItemsCollection.find(this.bucketitem._id)
	},

	selectThisListItem(){
		$("#"+this.props.bucketitem._id).addClass("selected")
	},

	updateThisBucketItem(event) {
		event.preventDefault();
		var newtitle = this.state.title.trim();
		var newdescription = this.state.description.trim();
		var newtags = this.state.tags.trim();
		var newcategory = this.state.category.trim();
		var newaddress = this.state.address.trim();
		var newrating = this.state.rating.trim();
		BucketItemsCollection.update(this.props.bucketitem._id, {$set : {
					title: newtitle,
					description: newdescription,
					tags: newtags,
					username: this.props.bucketitem.username,
					category: newcategory,
					address: newaddress,
					rating: newrating,
				}
			}
		)
	},

	deleteThisBucketItem() {
		BucketItemsCollection.remove(this.props.bucketitem._id);
	},

	handleTitleChange(event){
		this.setState({title: event.target.value})
	},

	handleDescriptionChange(event){
		this.setState({description: event.target.value})
	},

	handleTagsChange(event){
		this.setState({tags: event.target.value})
	},

	handleCategoryChange(event){
		this.setState({category: event.target.value})
	},

	handleAddressChange(event){
		this.setState({address: event.target.value})
	},

	handleRatingChange(event){
		this.setState({rating: event.target.value})
	},

	openForm(event){
		this.setState({editing: true})
	},

	closeForm(event) {
		this.setState({editing: false})
	},


	addToPersonalList() {
			// var currentTitle = this.state.title
			// var current_ID = this.state.id
			// var currentUser = Meteor.user()

			// var currentProfile = Meteor.user().profile
			// var usersItems = Meteor.user().profile.takenItems

		// console.log("currentProfile::")
		// console.log(currentProfile)

		// console.log("userItems::")
		// console.log(usersItems)


		// var finalItemsList = function(){
		// 	usersItems.push(currentTitle)
		// }

		// var itemToAdd = {currentTitle}
		// // console.log("itemToAdd::")
		// // console.log(itemToAdd)

		// finalItemsList();
		// console.log(currentUser)
		// var finalItems = finalItemsList
		// console.log("finalItemsList::")
		// console.log(itemToAdd)
		// var addedItemProfile = function() {
		// 	currentProfile.takenItems =
		// }


		// console.log(currentProfile)
		// 	var usersProfile = currentProfile
		// 	// allItems.push("test")
		// 	// currentProfile.takenItems = "test";
		// 	var allItems = currentProfile.takenItems
		// 	var finalItems = allItems.push("testing")
		// 	console.log(allItems)
			// var currentItemsTaken = Meteor.user().profile.takenItems
			// var addedOneItem = currentItemsTaken.push({name: "I hope this works"})
			// console.log("Profile Before Adding::")
			// console.log(Meteor.user().profile);
		// console.log(currentItemsTaken);
		// console.log(addedOneItem);

			// Meteor.users.update({_id: Meteor.user()._id},
			// 	{$set: {
			// 						takenItems:{ currentItemsTaken}
			// 					}
			// 				}
			// 				)
			// console.log("Profile After Adding::")
			// console.log(Meteor.user().profile);
	},

	render() {
		const itemClassName = this.props.bucketitem.checked ? "checked" : "";
		return (
			<li id={this.props.bucketitem._id}>
				<button className="delete" onClick={this.deleteThisBucketItem}>
					&times;
				</button>
				<button onClick={this.openForm}>Edit this item</button>

				{(Meteor.user() !== null)
				?
					<button onClick={this.addToPersonalList}>Add to my Bucket List!</button>
				:null
				}

				<div onClick={this.toggleDescription}>
				<p className="title">{this.props.bucketitem.title}</p>
				</div>

				{(this.state.showDescription == true)
				?
					<div>
						<button onClick={this.toggleShowAll}>Show All Details</button>
						<ul>
							<li className="description">{this.props.bucketitem.description}</li>
						</ul>
					</div>
				:null
				}

				{(this.state.showDescription == true && this.state.showAll == true)
					?
						<div>
							<ul>

								<li className="tags">{this.props.bucketitem.tags}</li>
								<li className="category">{this.props.bucketitem.category}</li>
								<li className="address">{this.props.bucketitem.address}</li>
								<li className="rating">{this.props.bucketitem.rating}</li>
							</ul>
						</div>

					:	null

				}
				{(this.state.editing == true)
					? <form className="editform" onSubmit={this.updateThisBucketItem}>
					<p> Title:
						<input
							type="text"
							name="updatedText"
							placeholder="Please don't leave blank"
							onChange={this.handleTitleChange}
							defaultValue={this.props.bucketitem.title}
						/>
					</p>
	        <p>
	          Description:
            <input
              type="text"
              ref="description"
							onChange={this.handleDescriptionChange}
							defaultValue={this.props.bucketitem.description}
              placeholder="Define Description Here" />

          </p>
          <p>
          	Tags:
            <input
              type="text"
              ref="tags"
              onChange={this.handleTagsChange}
							defaultValue={this.props.bucketitem.tags}
              placeholder="Define tags here" />
          </p>
           <p>Category:
					   <select
						   ref="category"
               onChange={this.handleCategoryChange}
							 defaultValue={this.props.bucketitem.category}
						   className="education-form"
						   id="education-select">
						     <option value="Education">Education</option>
						     <option value="Food">Food</option>
						     <option value="Local">Local</option>
						     <option value="Outdoors">Outdoors</option>
						     <option value="Sports">Sports</option>
						     <option value="Tourist">Tourist</option>
						     <option value="Travel">Travel</option>
						  </select>

          </p>
            <p>Address:
            <input
              type="text"
              ref="address"
              onChange={this.handleAddressChange}
							defaultValue={this.props.bucketitem.address}
              placeholder="Type Address Here" />
          </p>
            <p>Rating:
            <input
              type="text"
              ref="rating"
              onChange={this.handleRatingChange}
							defaultValue={this.props.bucketitem.rating}
              placeholder="Rate the item" />
          </p>

						<input type="submit" value="Update This Item"/>
						<button className="stopediting" onClick={this.closeForm}>Close Edit Form</button>
					</form>
					: null
				}
			</li>
		);
	}
});
