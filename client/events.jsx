Events = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sortedCategories: CategoriesCollection.find({}, {sort: {title: 1}}).fetch()
    }
  },
  
  renderCategories() {
    return this.data.sortedCategories.map((categoryobject) => {
        return <EventCategoryReact key={categoryobject._id} thingWithTitle={categoryobject} />;
    });
  },

  // makeAjaxCall() {
  //   $.ajax({
  //     type: 'GET' ,
  //     url: 'http://api.eventful.com/json/events/search?location=37.784517,-122.397194&within=5&app_key=jMhXTrTv46vxrBgT'
  //   }
  //     ).done(function(response){
  //       console.log(response)
  //     })
  // },

  // componentDidMount() {
  //   this.makeAjaxCall()
  // },

  render (){
    return (   
        <div className= "text-container">
          <ul>
            <h3 className="Category"> {this.renderCategories()} 
            </h3>
          </ul>
        </div> 
    );
  }
});


