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
  if (BucketItemsCollection.find().count() == 0) {
    BucketItemsCollection.insert({title: "Run a Marathon", category: "Sports"});
    BucketItemsCollection.insert({title: "Build an app in Meteor", category: "Education"});
    BucketItemsCollection.insert({title: "Finish a coding bootcamp", category: "Education"});
  }
});