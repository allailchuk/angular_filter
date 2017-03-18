/**
 * To Do controller.
 */

myApp.controller('TodoController', function($scope, ToDo) {

    /**
     * Keeping our To Do service in scope because we wanna bind to it's data
     * @type {*}
     */
    $scope.todos = ToDo;

    /**
     * This is the object that we creating
     * @type {{}}
     */
    $scope.newItem = {};

    /**
     * Initially asking to do service to load data
     * after that template will automatically update with the data because it's watching todos.data
     */
    $scope.todos.load();

    /**
     * Creates new to do item
     */
    $scope.add = function() {
        if(!$scope.newItem.name ) {
            alert('Write something!');
            return;
        }
        $scope.todos.add($scope.newItem).then(function() {
            $scope.newItem = {};
        });
    };

    /**
     * Deleting a to do item. Will raise confirm dialog before that
     * @param item - To do item object (must have id in it)
     */
    $scope.delete = function(item) {
        if(confirm('Are you sure?')) {
            $scope.todos.delete(item);
        }
    };



});