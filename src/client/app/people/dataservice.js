(function () {
    angular
    .module('app.people')
    .factory('dataservice', dataservice);
    
    dataservice.$inject = ['$http'];
    
    function dataservice($http) {
        var service = {
            getPeople: getPeople
        };
        return service;
    }
    
    function getPeople() {
        return $http.get('people/people.json');
        }
})();