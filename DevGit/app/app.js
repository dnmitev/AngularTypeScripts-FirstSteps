var app;
(function (app) {
    var main = angular.module("devGit", [
        "ngRoute"
    ]);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
    }
})(app || (app = {}));
