/**
 * Users controller.
 */
myApp.controller('UsersController', function ($scope, Users) {

    /**
     * Keeping our Users service in scope because we wanna bind to it's data
     * @type {*}
     */
    $scope.users = Users;

    /**
     * This is the object that we are editing in the edit/create form
     * @type {{}}
     */
    $scope.editable = {};

    /**
     * Initially asking users service to load data
     * after that template will automatically update with the data because it's watching users.data
     */
    $scope.users.load();

    /**
     * Creates new user out of editable object
     */
    $scope.add = function() {
        if(!$scope.editable.firstname || !$scope.editable.lastname || !$scope.editable.email) {
            alert('All fields are required!');
            return;
        }
        $scope.users.add($scope.editable).then(function() {
            $scope.editable = {};
        });
    };

    /**
     * Opens edit dialog and prepares editable object to be edited in there
     * @param user - User object (with id)
     */
    $scope.edit = function (user) {
        // Showing popup
        $scope.popup = true;
        // Creating a clone of user object
        // Avoiding data mutation
        // This object will be edited in the edit form
        $scope.editable = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        };
    };

    /**
     * Saving editable object
     */
    $scope.save = function() {
        // Saving edited object
        $scope.users.save($scope.editable).then(function() {
            // Hide popup when save successfull
            $scope.popup = false;
            // Reset editable object
            $scope.editable = {};
        });
    };

    /**
     * Deleting a user. Will raise confirm dialog before that
     * @param user - User object (must have id in it)
     */
    $scope.delete = function(user) {
        if(confirm('Are you sure?')) {
            $scope.users.delete(user);
        }
    };


    $scope.fields = [
        {name: 'firstname', label: 'First Name'},
        {name: 'lastname', label: 'Last Name'},
        {name: 'email', label: 'Email'},
        {name: 'action', label: 'Action'}
    ];


    /**
     * Adding filter function
     */
    myApp.filter('SearchByField', function() {
        return function (list, field, value) {
            if (!field || !value) {
                return list;
            }
            value = value.toLowerCase();
            var filtered = [];
            for (var i=0; i<list.length; i++) {
                var item = list[i];
                if (typeof (item[field]) == 'string' && item[field].toLowerCase().indexOf(value)!=-1){
                    filtered.push(item);
                } else if (item[field] instanceof Array){
                    for(var ii=0; ii<item[field].length; ii++){
                        if (item[field][ii].toLowerCase().indexOf(value)!=-1) {
                            filtered.push(item);
                        }
                    }

                }
            }
            return filtered;
        };
    });




});