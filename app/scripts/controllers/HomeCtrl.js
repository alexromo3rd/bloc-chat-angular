(function() {
	function HomeCtrl(Room, Message, $scope) {
		this.rooms = Room.all;

		this.messages = Message.getByRoomId;

		$scope.activeRoom = function(name) {
			$scope.currentRoom = name;
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
