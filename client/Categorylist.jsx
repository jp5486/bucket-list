CategoryListReact = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    thingWithTitle: React.PropTypes.object.isRequired
  },

  getMeteorData() {
    return {
      allItems: BucketItemsCollection.find({category: this.props.thingWithTitle.title}).fetch()
    }
  },

  renderItems(){
    return this.data.allItems.map((item) => {
      return <BucketItemsByCategory key={item._id} bucketItem={item} />;
    });
  },

  getInitialState() {
    return {
      showItems: false,
    };
  },

  toggleItems(event){
    this.setState({showItems: !this.state.showItems})
  },

  render() {
    return (
      <li className="Category-Title">
      <div onClick={this.toggleItems}>
        <p>{this.props.thingWithTitle.title}</p>
      </div>
      {(this.state.showItems == true)
        ?
        <div>
          <ul>
            {this.renderItems()}
           </ul>
        </div>
      :null
      }
      </li>
    );
  }
});