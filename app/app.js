var demoApp = angular.module('demoApp', ['ngRoute'])
var routeProvider = function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: 'view/view1.html'
            })
        .when('/1',
            {
                controller: 'SimpleController',
                templateUrl: 'view/view1.html'
            })
        .when('/2',
            {
                controller: 'SimpleController2',
                templateUrl: 'view/view2.html'
            })
        .otherwise({ redirectTo: '/' })
}
demoApp.config(routeProvider)