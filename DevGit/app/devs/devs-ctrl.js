var app;
(function (app) {
    var devs;
    (function (devs) {
        var DevsCtrl = (function () {
            function DevsCtrl() {
            }
            return DevsCtrl;
        })();
        function routeConfig($stateProvider) {
            $stateProvider.state('devs', {
                url: '/devs',
                templateUrl: 'app/devs/devs.html',
                controller: 'DevsCtrl',
                controllerAs: 'vm'
            });
        }
        angular
            .module("devGit")
            .controller("DevsCtrl", DevsCtrl)
            .config(routeConfig);
    })(devs = app.devs || (app.devs = {}));
})(app || (app = {}));
