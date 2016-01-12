// BucketItemsCollection = new Mongo.Collection("bucketitems");
// CategoriesCollection = new Mongo.Collection("categories")

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

  Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile ? options.profile : [];
    return user;
  });

  // Accounts.onCreateUser(function(options, user) {
  //   user.personalItems = [];
  //   if (options.profile)
  //     user.profile = options.profile;
  //   return user;
  // });

  // Meteor.users.allow({
  //  update: function(userId, user){
  //    return user._id === Meteor.userId();
  //    return user.personalItems === Meteor.userID().personalItems();
  //  }
  // });

// Meteor.publish("userData", function () {
//   if (this.userId) {
//     return Meteor.users.find({_id: this.userId},
//                              {fields: {personalItems: 1}});
//   } else {
//     this.ready();
//   }
// });


  // if (BucketItemsCollection.find().count() == 0) {
  //   BucketItemsCollection.insert(
  //   {
  //     title: "Run a Marathon",
  //     category: "Sports",
  //     description: "",
  //     tags: [],
  //     address: "",
  //     rating: "",
  //     users: {},
  //     editing: false,
  //     showDescription: false,
  //     showAll: false
  //   }
  //   );
  //   BucketItemsCollection.insert({
  //     title: "Build an app in Meteor",
  //     category: "Education",
  //     description: "",
  //     tags: [],
  //     address: "",
  //     rating: "",
  //     editing: false,
  //     showDescription: false,
  //     showAll: false
  //   });
  //   BucketItemsCollection.insert({
  //     title: "Finish a coding bootcamp",
  //     category: "Education",
  //     description: "",
  //     tags: [],
  //     address: "",
  //     editing: false,
  //     showDescription: false,
  //     showAll: false
  //   });
  // }
});
