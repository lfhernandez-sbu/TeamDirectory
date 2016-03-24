(function() {
    'use strict';
    
    angular
    .module('app.people', [
        'app',
        'PeopleController',
        'ngRoute',
        '$http'
    ])
    
    .config('$routeProvider', getRoutes($routeProvider));
    
    function getRoutes($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'people/people.html',
            controller: 'PeopleController'
        })
        .otherwise({
            redirectTo: 'people/people.html'
        });
    }
    
})();