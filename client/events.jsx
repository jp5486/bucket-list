Events = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sortedCategories: CategoriesCollection.find({}, {sort: {title: 1}}).fetch()
    }
  },

  renderCategories() {
    return this.data.sortedCategories.map((categoryobject) => {
        return <CategoryReact key={categoryobject._id} thingWithTitle={categoryobject} />;
    });
  },




  render (){
    return (
      <div className= "Events">
        <ul>
          <h3 className="Category"> {this.renderCategories()} </h3>

        </ul>
      </div>
    )
  }
});



