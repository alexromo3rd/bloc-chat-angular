(function() {
	function ModalInstanceCtrl($uibModalInstance) {

		this.ok = function() {
			console.log("got to OK")
			// close the modal, and pass the room name into the close function

		}

		this.cancel = function() {
			console.log("got to cancel")

			// dismiss modal
		}

	}

	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
