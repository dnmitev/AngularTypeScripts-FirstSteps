var app;
(function (app) {
    var devs;
    (function (devs) {
        var DevsCtrl = (function () {
            function DevsCtrl() {
            }
            return DevsCtrl;
        }());
        angular
            .module("devGit")
            .controller("DevsCtrl", DevsCtrl);
    })(devs = app.devs || (app.devs = {}));
})(app || (app = {}));
