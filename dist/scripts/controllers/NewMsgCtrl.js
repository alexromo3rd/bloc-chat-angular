(function() {
    function NewMsgCtrl(Message) {
        this.post = function(text) {
				// save the room in firebase using Room service
				Message.send(text);
			};

    }

    angular
        .module('blocChat')
        .controller('NewMsgCtrl', ['Message', NewMsgCtrl]);
})();