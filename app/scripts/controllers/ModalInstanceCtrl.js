(function() {
	function ModalInstanceCtrl($uibModalInstance) {

		this.name = "";

		this.ok = function(name) {
			// close the modal, and pass the room name into the close function
			$uibModalInstance.close(name);
		}

		this.cancel = function() {
			// dismiss modal
			$uibModalInstance.dismiss();
		}

	}

	angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
