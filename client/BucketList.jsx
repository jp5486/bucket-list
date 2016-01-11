BucketList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sortedBucketItems: BucketItemsCollection.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  renderBucketItems() {
    return this.data.sortedBucketItems.map((bucketObject) => {
      return <BucketItemReact key={bucketObject._id} bucketitem={bucketObject} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    var text = React.findDOMNode(this.refs.textInput).value.trim();

    BucketItemsCollection.insert({
      text: text,
      cratedAt: new Date()
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = ""
  },

  render() {
    return (
      <div className="bucketlist">
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
