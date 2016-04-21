var app;
(function (app) {
    var common;
    (function (common) {
        var CONST = app.config.Constants.Default;
        var GitService = (function () {
            function GitService($http) {
                this.$http = $http;
            }
            GitService.prototype.getRepoIssues = function () {
                return this.$http
                    .get(CONST.GIT_API_URL + "/repos/" + CONST.OWNER + "/" + CONST.REPO + "/issues")
                    .success(function (response) { return console.log(response); })
                    .error(function (error) { return alert(error); });
            };
            GitService.$inject = ['$http'];
            return GitService;
        })();
        common.GitService = GitService;
        angular
            .module("devGit")
            .service("GitService", GitService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
