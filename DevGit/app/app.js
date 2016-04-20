var app;
(function (app) {
    var main = angular.module("devGit", [
        "ngRoute"
    ]);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/devs', {
            templateUrl: 'app/devList/devs.html',
            controller: 'DevsCtrl as vm'
        })
            .when('/issues', {
            templateUrl: 'app/issues/issues.html',
            controller: 'IssuesCtrl as vm'
        })
            .otherwise('/');
    }
})(app || (app = {}));
