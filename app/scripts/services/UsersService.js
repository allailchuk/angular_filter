/**
 * This service keeps user list data along with functions loading, adding, deleting and saving
 */
myApp.service('Users', function($q, $http) {

    /**
     * Here we keep user list
     * @type {array} - Array of objects
     */
    this.data = null;

    /**
     * Loading user list
     * @returns {*} Promise
     */
    this.load = function () {
        var self = this;
        return $http.get('/restapi/users').then(function (rsp) {
            self.data = rsp.data.data;
        });
    };

    /**
     * Creating new user, after create was successful user list will be reloaded
     * @param user - User object
     * @returns {*} Promise
     */
    this.add = function (user) {
        var self = this;
        return $http.post('/restapi/users', user).then(function () {
            self.load();
        });
    };

    /**
     * Delete user. After successful delete user list will be reloaded
     * @param user - User object
     * @returns {*} Promise
     */
    this.delete = function (user) {
        // Check if user object has id
        if(user.id == undefined) {
            // Looks like user doesn't have id
            // so we create rejected promise, put a reason for rejection and return it
            var deferred = $q.defer();
            deferred.reject({
                reason: 'User object must have id'
            });
            return deferred.promise;
        }
        // At this point user object is valid to be deleted
        var self = this;
        return $http.delete('/restapi/users/' + user.id).then(function () {
            // User is deleted, go and reload the list
            self.load();
        });
    };

    /**
     * Save modified user. User must have id After successful save list will be reloaded.
     * @param user - User object
     * @returns {*} Promise
     */
    this.save = function (user) {
        // Check if user object has id
        if(user.id == undefined) {
            // Looks like user doesn't have id
            // so we create rejected promise, put a reason for rejection and return it
            var deferred = $q.defer();
            deferred.reject({
                reason: 'User object must have id'
            });
            return deferred.promise;
        }
        var self = this;
        return $http.put('/restapi/users/' + user.id, user).then(function () {
            self.load();
        });
    };


});