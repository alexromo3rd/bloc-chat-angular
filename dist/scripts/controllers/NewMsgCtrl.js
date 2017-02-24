(function() {
    function NewMsgCtrl(Message, Room, $scope) {
        $scope.newMessage = {};
        
        $scope.addMessage= function(){
            var newMessage = {
                content: $scope.newMessage.content,
                sentAt: firebase.database.ServerValue.TIMESTAMP,
                roomId: $scope.currentRoom.$id,
                username: $scope.currentUser
            }
            Message.send(newMessage);
        }

    }

    angular
        .module('blocChat')
        .controller('NewMsgCtrl', ['Message', 'Room', '$scope', NewMsgCtrl]);
})();