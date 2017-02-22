(function() {
    function NewMsgCtrl(Message) {
        this.send = function() {
            modalInstance.result.then(function(name) {
                // save the room in firebase using Room service
                Room.create(name);
            });
        };

    }

    angular
        .module('blocChat')
        .controller('NewMsgCtrl', ['Message', NewMsgCtrl]);
})();