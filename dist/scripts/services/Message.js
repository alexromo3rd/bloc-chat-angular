(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function (roomId) {
        // Filter the messages by their room ID.
        messages.orderByChild('roomId').equalTo(roomId).then(function(roomId) {
          console.log("You've selected room ID # " + roomId + "!");
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
