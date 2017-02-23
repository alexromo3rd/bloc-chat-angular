(function() {
	function UsernameModalCtrl($uibModalInstance, $cookies) {

    this.ok = function() {
      if (this.name !== undefined && $.trim(this.name) !== '') {
        $cookies.put('blocChatCurrentUser', this.name);
      } else {
          return false;
      }
			$uibModalInstance.close();
		};
	}

	angular
		.module('blocChat')
		.controller('UsernameModalCtrl', ['$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
