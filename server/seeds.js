Meteor.publish("bucketitems", function () {
  return BucketItemsCollection.find({
      owner: this.userId
  });
});
Meteor.publish("categories", function () {
  return CategoriesCollection.find();
});
Meteor.publish("markers", function () {
  return MarkersList.find();
});
Meteor.publish("events", function () {
  return MarkersList.find();
});
Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {public: 1}});
});
Meteor.publish("allUserData", function () {
    return Meteor.users.find({}, {profile: {takenItems: 1}});
});

Meteor.publish('images',function(){
  return Images.find({});
});

Meteor.startup(function () {
  if (CategoriesCollection.find().count() == 0) {
    CategoriesCollection.insert({title: "Education"});
    CategoriesCollection.insert({title: "Food"});
    CategoriesCollection.insert({title: "Local"});
    CategoriesCollection.insert({title: "Outdoors"});
    CategoriesCollection.insert({title: "Sports"});
    CategoriesCollection.insert({title: "Travel"});
    CategoriesCollection.insert({title: "Tourist"});
  };

  //edit fields on Users Collection here
  Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile ? options.profile : {};

    if (user.services.google !== undefined) {
        user.profile.profile_picture = user.services.google.picture;
    }
    if (user.services.twitter !== undefined) {
        user.twitter.profile_picture = user.services.twitter.profile_url;
    }
    return user;
  });
});
