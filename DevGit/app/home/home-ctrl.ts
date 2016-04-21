module app.home {

    /**
     * HomeCtrl
     */
    class HomeCtrl {

        static $inject = ['GitService'];
        constructor(private gitSvc: app.common.GitService) {
            this.gitSvc.getRepoIssues();
            console.log('here I am');
        }

    }

    function routeConfig($stateProvider: ng.ui.IStateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/app/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        })
    }

    angular
        .module("devGit")
        .controller("HomeCtrl", HomeCtrl)
        .config(routeConfig);

}