(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      getByRoomId: function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(text) {
        messages.$add(text).then(function(ref) {
					var id = ref.key;
					console.log("added record with id" + id);
					messages.$indexFor(id);
				});
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
