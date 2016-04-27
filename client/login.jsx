Login = React.createClass({

  hasUsername() {
    Accounts.ui.config({
      passwordSignupFields: "USERNAME_ONLY"
    });
  },

  render() {
    {this.hasUsername()}
    return(
      <AccountsUIWrapper />
    )
  }
});