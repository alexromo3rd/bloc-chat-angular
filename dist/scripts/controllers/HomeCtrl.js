(function() {
	function HomeCtrl(Room, Message, $scope, $cookies) {
		this.rooms = Room.all;
		$scope.currentUser = $cookies.get('blocChatCurrentUser');

		$scope.activeRoom = function(room) {
			$scope.currentRoom = room;
			$scope.messages = Message.getByRoomId($scope.currentRoom.$id);
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', '$cookies', HomeCtrl]);
})();
