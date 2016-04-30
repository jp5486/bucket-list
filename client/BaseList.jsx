BucketList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sortedBucketItems: BucketItemsCollection.find({}, {sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.user(),
      myImages: Images.find({}).fetch()
    }
  },

  getInitialState(){
    return {
      addingItem: false
    }
  },

  renderBucketItems() {
    return this.data.sortedBucketItems.map((bucketObject) => {
      return <BucketItemReact key={bucketObject._id} bucketitem={bucketObject} />;
    });
  },
  // renderItemPicture() {
  //   return this.data.my.map((bucketObject) => {
  //     return <BucketItemReact key={bucketObject._id} bucketitem={bucketObject} />;
  //   });
  // },


  clearForm(){
    ReactDOM.findDOMNode(this.refs.title).value = ""
    ReactDOM.findDOMNode(this.refs.description).value = ""
    ReactDOM.findDOMNode(this.refs.tags).value = ""
    ReactDOM.findDOMNode(this.refs.category).value = ""
    ReactDOM.findDOMNode(this.refs.rating).value = ""
    ReactDOM.findDOMNode(this.refs.address).value = ""
  },

  handleSubmit(event) {
    event.preventDefault();
    var title = ReactDOM.findDOMNode(this.refs.title).value.trim();
    var description = ReactDOM.findDOMNode(this.refs.description).value.trim();
    var tags = ReactDOM.findDOMNode(this.refs.tags).value.trim();
    var category = ReactDOM.findDOMNode(this.refs.category).value.trim();
    var address = ReactDOM.findDOMNode(this.refs.address).value.trim();
    var rating = ReactDOM.findDOMNode(this.refs.rating).value.trim();

    var pictureID = Session.get("photoID");
    if(pictureID !== undefined){
       var image_data = pictureID
    } else {
      var image_data = "No Image"
    }
    console.log("photoID::")
    console.log(pictureID)

    BucketItemsCollection.insert({
      title: title,
      description: description,
      tags: tags,
      category: category,
      address: address,
      rating: rating,
      image_id: image_data,
      owner: Meteor.userId(),
      username: Meteor.user().username,
      createdAt: new Date()
    })

    this.clearForm();
    ReactDOM.unmountComponentAtNode(document.getElementById("render-photo"));
    this.setState({addingItem: false})
  },

  addingNewItem(){
    this.setState({
      addingItem: true
    })
  ReactDOM.render(<PhotoCapsule />, document.getElementById("render-photo"));
  },

  render() {
    if (Meteor.user() == null) {
      return ( <div className="text-container"> Please sign in to create a personal bucket list</div> )
    } else {
      return (
        <div className="bucketlist">
          <header>
            <h1>My Bucket List</h1>
            <button onClick={this.addingNewItem}>Add a new item!</button>
            <div id="render-photo"></div>

            {this.state.addingItem == true
            ? <form className="new-bucketitem form-group" onSubmit={this.handleSubmit}>

            <p>Title:
              <input 
               className="form-control"

                type="text"
                ref="title"
                placeholder="Add title" />
            </p>
            <p>Description:
              <input 
               className="form-control"

                type="text"
                ref="description"
                placeholder="Add description" />
            </p>
            <p>Tags:
              <input 
               className="form-control"

                type="text"
                ref="tags"
                placeholder="Add tags" />
            </p>
              <p>Category:
               <select
                 ref="category"
                 className="drop-down-select"
                 id="education-select-create">
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
               className="form-control"

                type="text"
                ref="address"
                placeholder="Add address" />
            </p>
            <p>Rating:
              <select
               ref="rating"
               className="drop-down-select"
               id="rating-select">
                 <option value="1" >1</option>
                 <option value="2" >2</option>
                 <option value="3" >3</option>
                 <option value="4" >4</option>
                 <option value="5" >5</option>
              </select>
            </p>

            <p>Picture: Dont forget to add a picture!
            </p>

            <input 
             className="button"
                  type="submit"
                  value="submit"/>
            </form>
            : null
            }
          </header>
          <div className="text-container">
          <ul>
            {this.renderBucketItems()}
          </ul>
          </div>
        </div>
      );
    }
  }
});