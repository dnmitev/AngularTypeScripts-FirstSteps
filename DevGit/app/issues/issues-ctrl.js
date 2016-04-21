var app;
(function (app) {
    var issues;
    (function (issues) {
        var IssuesCtrl = (function () {
            function IssuesCtrl() {
            }
            return IssuesCtrl;
        })();
        function routeConfig($stateProvider) {
            $stateProvider.state('issues', {
                url: '/issues',
                templateUrl: 'app/issues/issues.html',
                controller: 'IssuesCtrl',
                controllerAs: 'vm'
            });
        }
        angular
            .module("devGit")
            .controller("IssuesCtrl", IssuesCtrl)
            .config(routeConfig);
    })(issues = app.issues || (app.issues = {}));
})(app || (app = {}));
