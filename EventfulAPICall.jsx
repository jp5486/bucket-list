EventfulAPICall = React.createClass({

  render() {
    Meteor.call("checkEvents", function(error, results) {
      console.log(results.content);
    });
  }
})