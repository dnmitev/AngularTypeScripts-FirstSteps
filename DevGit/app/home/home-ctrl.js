var app;
(function (app) {
    var home;
    (function (home) {
        /**
         * HomeCtrl
         */
        var HomeCtrl = (function () {
            function HomeCtrl(gitSvc) {
                this.gitSvc = gitSvc;
                this.gitSvc.getRepoIssues();
                console.log('here I am');
            }
            HomeCtrl.$inject = ['GitService'];
            return HomeCtrl;
        })();
        function routeConfig($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                templateUrl: '/app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            });
        }
        angular
            .module("devGit")
            .controller("HomeCtrl", HomeCtrl)
            .config(routeConfig);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
