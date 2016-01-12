CategoryReact = React.createClass({
  render() {
    return (
      <li className="Category Title">{this.props.thingWithTitle.title} </li>
    );
  }
});