Events = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sortedCategories: CategoriesCollection.find({}, {sort: {title: 1}}).fetch()
    }
  },

  renderCategories() {
    return this.data.sortedCategories.map((object) => {
        return <CategoryReact key={object._id} thingWithTitle={object} />;
    });
  },




  render (){
    return (
      <div className= "Events">
        <ul>
          <h2 className="Category"> {this.renderCategories()} </h2>

        </ul>
      </div>
    )
  }
});



