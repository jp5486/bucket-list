BucketList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sortedBucketItems: BucketItemsCollection.find({}, {sort: {createdAt: -1}}).fetch()
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

    BucketItemsCollection.insert({
      title: title,
      description: description,
      tags: tags,
      category: category,
      address: address,
      rating: rating,
      createdAt: new Date()
    });

    clearForm();
    this.setState({addingItem: false})
  },

  addingNewItem(){
    this.setState({
      addingItem: true
    })
  },

  render() {
    return (
      <div className="bucketlist">
        <header>
          <h1>Bucket List</h1>
          <button onClick={this.addingNewItem}>Add a new item!</button>
          {this.state.addingItem == true
          ? <form className="new-bucketitem" onSubmit={this.handleSubmit}>
          
          <p>Title: 
            <input
              type="text"
              ref="title"
              placeholder="Type to add new item to your bucket list" />
          </p>

          <p>Description: 
            <input
              type="text"
              ref="description"
              placeholder="Type to add new item to your bucket list" />
          </p>
          <p>Tags: 
            <input
              type="text"
              ref="tags"
              placeholder="Type to add new item to your bucket list" />
          </p>
            <p>Category: 
            <input
              type="text"
              ref="category"
              placeholder="Type to add new item to your bucket list" />
          </p>
            <p>Address: 
            <input
              type="text"
              ref="address"
              placeholder="Type to add new item to your bucket list" />
          </p>
            <p>Rating: 
            <input
              type="text"
              ref="rating"
              placeholder="Type to add new item to your bucket list" />
          </p>
          <input
                type="submit"
                value="submit"/>
          </form>
          : null
          }
        </header>

        <ul>
          {this.renderBucketItems()}
        </ul>
      </div>
      );
  }
});
