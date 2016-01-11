Login = React.createClass({


  fbLoginEvent() {
    Meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, function(err) {
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
    })
  },

  gglLoginEvent() {
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, function(err) {
      if (err) {
        throw new Meteor.Error("Google login failed");
      }
    })
  },

  twtrLoginEvent() {
    Meteor.loginWithTwitter({}, function(err) {
      if (err) {
        throw new Meteor.Error("Twitter login failed");
      }
    })
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },


  renderEmail() {
    var value = this.state.value;
    return(

      <form id="sign-in-with-email">
        <div class="modal-body">
          <div class="form-group">
            <label for="emailAddress"><Email Address</label>
            <input type="email" name="emailAddress" class="form-control" placeholder="What's your email?">
          </div>
          <div class="form-group">
            <label for="password" name="password" class="form-control" placeholder="Password">
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary btn-create-account" >Create Account</button>
          <button type="submit" class="btn btn-default btn-sign-in">Sign In</button>
        </div>
      </form>

  },

  render() {
    return(
      <ul class="btn-list">
        <li><button type="button" class="btn btn-social-login btn-facebook" onClick={this.fbLoginEvent}><i class="fa fa-facebook"></i> Sign in with Facebook</button></li>
        <li><button type="button" class="btn btn-social-login btn-google" onClick={this.gglLoginEvent}><i class="fa fa-google"></i> Sign in with Google</button></li>
        <li><button type="button" class="btn btn-social-login btn-twitter" onClick={this.twtrLoginEvent}><i class="fa fa-twitter"></i> Sign in with Twitter</button></li>
        <li><button type="button" class="btn btn-social-login btn-success" onClick={this.renderEmail} data-toggle="modal" data-target="#sign-in-with-email-modal"><i class="fa fa-envelope"></i> Sign in with Email</button></li>
      </ul>
      )
  }
});