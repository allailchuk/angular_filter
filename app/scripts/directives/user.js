myApp.directive('user', function($http) {
    return {
        restrict: 'E',
        template: 'Firstname: {{user.firstname}}<br> Lastname: {{user.lastname}}<br> Email: {{user.email}}<br> <button ng-click="id=id+1">Increment</button>',
        scope: {
            id: '='
        },
        link: function($scope) {

            $scope.$watch('id', function() {
                $http.get('/restapi/users/' + $scope.id).then(function(rsp) {
                    $scope.user = rsp.data;
                });
            });

        }
    }
});