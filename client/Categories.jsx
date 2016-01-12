CategoriesReact = React.createClass({
  
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      allCategories: CategoriesCollection.find({}).fetch(),
    }
  },

  render (){
    return (   
        <div className= "Events">
          <ul>
            <h3 className="Category"> {this.renderCategories()} 
            </h3>
          </ul>
        </div> 
    );
  }
});