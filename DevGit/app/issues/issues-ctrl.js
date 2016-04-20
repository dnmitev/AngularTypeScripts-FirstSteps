var app;
(function (app) {
    var issues;
    (function (issues) {
        var IssuesCtrl = (function () {
            function IssuesCtrl() {
            }
            return IssuesCtrl;
        }());
        angular
            .module("devGit")
            .controller("IssuesCtrl", IssuesCtrl);
    })(issues = app.issues || (app.issues = {}));
})(app || (app = {}));
