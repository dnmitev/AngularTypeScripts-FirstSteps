module app {
    var main = angular.module("devGit",
        [
            "ngRoute"
        ]);

    main.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider: ng.route.IRouteProvider) :void {
        
    }
}