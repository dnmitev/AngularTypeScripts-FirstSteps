module app.common {

    interface IGitService {
        getRepoIssues(): ng.IPromise<app.domain.IGitIssue>;
    }

    let CONST = app.config.Constants.Default;

    export class GitService implements IGitService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {

        }

        getRepoIssues(): ng.IPromise<app.domain.IGitIssue> {
            return this.$http
                        .get(`${CONST.GIT_API_URL}/repos/${CONST.OWNER}/${CONST.REPO}/issues`)
                        .success(response => console.log(response))
                        .error(error => alert(error));
        }

    }

    angular
        .module("devGit")
        .service("GitService", GitService);

}