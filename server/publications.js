// server: publish the rooms collection, minus secret info.
// Meteor.publish("categories", function () {
//   return categories.find();
// });

// Meteor.publish("bucketitems", function () {
//   return bucketitems.find();
// });
// ... and publish secret info for rooms where the logged-in user
// is an admin. If the client subscribes to both streams, the records
// are merged together into the same documents in the Rooms collection.
// Meteor.publish("adminSecretInfo", function () {
//   return Rooms.find({admin: this.userId}, {fields: {secretInfo: 1}});
// });

// // publish dependent documents and simulate joins
// Meteor.publish("roomAndMessages", function (roomId) {
//   check(roomId, String);
//   return [
//     Rooms.find({_id: roomId}, {fields: {secretInfo: 0}}),
//     Messages.find({roomId: roomId})
//   ];
// });


// Meteor.publish("categories", function () {
//   return categories.find();
// });
// Meteor.publish("bucketitems", function () {
//   return bucketitems.find();
// });
// Meteor.publish("userData", function () {
//   return users.find();
// });
