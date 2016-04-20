module app {
    var main = angular.module("devGit",
        [
            "ngRoute"
        ]);

    main.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    
    function routeConfig($routeProvider: ng.route.IRouteProvider) :void {
        
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
}