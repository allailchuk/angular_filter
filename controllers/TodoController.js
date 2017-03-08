myApp.controller('TodoController', function($scope, $http) {

        $scope.loadItems = function () {
            $http.get('/restapi/todos').then(function (rsp) {
                $scope.items = rsp.data.data;
            })
        };
        $scope.loadItems();

        $scope.deleteItem = function (item) {
            $http.delete('/restapi/todos/' + item.id).then(function () {
                $scope.loadItems();
            })
        };

        $scope.createItem = function () {
            var item = {
                name: $scope.newItem
            };
            $http.post('/restapi/todos', item).then(function () {
                $scope.loadItems();
                $scope.newItem = "";
            });
        }

});