/**
 * This service keeps to do list data along with functions loading, adding, deleting and saving
 */
myApp.service('ToDo', function($q, $http) {

    /**
     * Here we keep to do list
     * @type {array} - Array of objects
     */
    this.items = null;

    /**
     * Loading to do list
     * @returns {*} Promise
     */
    this.load = function () {
        var self = this;
        return $http.get('/restapi/todos').then(function (rsp) {
            self.items = rsp.data.data;
        });
    };

    /**
     * Creating new to do item, after create was successful to do list will be reloaded
     * @param item - ToDos object
     * @returns {*} Promise
     */
    this.add = function (item) {
        var self = this;

        return $http.post('/restapi/todos', item).then(function () {
            self.load();
            self.newItem = "";
        })
    };

    /**
     * Delete to do item. After successful delete to do item list will be reloaded
     * @param item - ToDos object
     * @returns {*} Promise
     */
    this.delete = function (item) {
        // Check if To do object has id
        if(item.id == undefined) {
            // Looks like to do item doesn't have id
            // so we create rejected promise, put a reason for rejection and return it
            var deferred = $q.defer();
            deferred.reject({
                reason: 'Todo object must have id'
            });
            return deferred.promise;
        }
        // At this point to do object is valid to be deleted
        var self = this;
        return $http.delete('/restapi/todos/' + item.id).then(function () {
            // to do item is deleted, go and reload the list
            self.load();
        });
    };

});