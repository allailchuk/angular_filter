
myApp.controller('ChangeContentController', function($scope) {

    $scope.content = [
        {id : '1', value: 'Box #1'},
        {id : '2', value: 'Box #2'},
        {id : '3', value: 'Box #3'},
        {id : '4', value: 'Box #4'}
    ];

    $scope.editItem = null;

    $scope.focusEdit = function () {
        setTimeout(function() {
            $('.editable-list .editing input').focus();
        }, 0);
    };


});