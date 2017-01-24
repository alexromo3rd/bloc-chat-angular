(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		return {
			all: rooms,
			create: function(name) {
				// store in firebase using $add

			}
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
