CategoryReact = React.createClass({
  render() {
    return (
      <li><span className="Category Title">{this.props.thingWithTitle.title} </span></li>
    );
  }
});