EventCategoryReact = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      allCategories: CategoriesCollection.find({}).fetch(),
    }
  },

  render() {
    return (
      <li className="Category Title">{this.props.thingWithTitle.title} </li>
    );
  }
});