var myApp = angular.module('route-demo', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'views/pages/users.html'
        })
        .state('todo', {
            url: '/todo',
            controller: 'TodoController',
            templateUrl: 'views/pages/todo.html'
        })
        .state('calculator', {
            url: '/calculator',
            templateUrl: 'views/pages/calculator.html'
        })
        .state('filter', {
            url: '/filter',
            templateUrl: 'views/pages/filter.html'
        })
        .state('directives', {
            url: '/directives',
            templateUrl: 'views/pages/directives.html'
        })
        .state('change_content', {
            url: '/change_content',
            templateUrl: 'views/pages/change_content.html'
        });

    $urlRouterProvider.otherwise('users');
});