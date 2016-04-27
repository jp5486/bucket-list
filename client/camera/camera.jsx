Template.takePhoto.events({
  'click button': function(){

    var cameraOptions = {
      width: 600,
      height: 400
      // ,
      // sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    };

    MeteorCamera.getPicture(cameraOptions, function(error, data) {
      if(!error){
        Session.set('photo', data);
        Images.insert(data, function(err, fileObj){
          if(err){
            console.log("err below");
            // console.log(err);
          }else{
            console.log("Picture Saved!");
            console.log(fileObj);
            console.log(fileObj._id);
            Session.set('photoID', fileObj._id)
            console.log("Setting session photoID")
            console.log(Session.get('photoID'))
          }
        })
      }
    });
  }
});


// Template.imageView.helpers({
//   images: function () {
//     return Images.find(); // Where Images is an FS.Collection instance
//   },
//   getImage: function(id) {
//     console.log("Trying to find image...");
//     var result = Images.find(id);
//     return result;
//   }
// });
