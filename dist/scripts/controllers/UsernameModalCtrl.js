(function() {
	function UsernameModalCtrl($uibModalInstance, $cookies) {

    this.ok = function() {
      if (this.name !== '') {
        $cookies.put('blocChatCurrentUser', this.name);
        console.log($cookies.get('blocChatCurrentUser'));
      }
			$uibModalInstance.close();
		};
	}

	angular
		.module('blocChat')
		.controller('UsernameModalCtrl', ['$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
