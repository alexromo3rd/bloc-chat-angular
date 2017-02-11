(function() {
	function HomeCtrl(Room, $scope) {
		this.rooms = Room.all;

		$scope.activeRoom = function(name) {
			$scope.currentRoom = name;
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
