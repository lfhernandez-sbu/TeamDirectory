(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$http', 'peopleService'];
    function PeopleController($http, peopleService) {
        var vm = this;

        vm.people = [];
        vm.getPeople = getPeople;
        vm.title = "Team";

        function activate() {
            return getPeople().then(function() {
                console.log("Activated Team View");
            });
        }

        function getPeople() {
            return peopleService.getPeople().success(function() {
                vm.avengers = data;
                return vm.avengers;
            });

        }
    }
})();