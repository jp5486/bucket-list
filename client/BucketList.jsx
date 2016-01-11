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

  handleSubmit(event) {
    event.preventDefault();

    var title = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    BucketItemsCollection.insert({
      title: title,
      createdAt: new Date()
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = ""
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
          
          <p>List Title: 
            <input
              type="text"
              ref="textInput"
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
