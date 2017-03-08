var myApp = angular.module('route-demo', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('users', {
            url: '/users',
            templateUrl: 'pages/users.html'
        })
        .state('todo', {
            url: '/todo',
            controller: 'TodoController',
            templateUrl: 'pages/todo.html'
        })
        .state('calculator', {
            url: '/calculator',
            templateUrl: 'pages/calculator.html'
        })
        .state('filter', {
            url: '/filter',
            templateUrl: 'pages/filter.html'
        });
    $urlRouterProvider.otherwise('users');
});