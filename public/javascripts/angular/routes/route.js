var app = angular.module('route', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
	.when('/', { templateUrl: '/client/index.html' })
	.otherwise({ redirectTo: '/' })

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $locationProvider.hashPrefix('!');
});