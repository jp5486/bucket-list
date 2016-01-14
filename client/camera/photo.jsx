PhotoUIWrapper = React.createClass({
  componentDidMount() {
    // Wrap Meteor Blaze template with React
    this.view = Blaze.render(Template.imageView,
      ReactDOM.findDOMNode(this.refs.imagespan));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return <span ref="imagespan" />;
  }
})




PhotoCapsule = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render Photo button
    this.view = Blaze.render(Template.takePhoto,
      ReactDOM.findDOMNode(this.refs.photospan));
  },
  render(){
    return <span ref="photospan" />
  }
})
