module app.issues {
    
    class IssuesCtrl {
        
    }

    function routeConfig($stateProvider: ng.ui.IStateProvider) {
        $stateProvider.state('issues', {
            url: '/issues',
            templateUrl: 'app/issues/issues.html',
            controller: 'IssuesCtrl',
            controllerAs: 'vm'
        })
    }
    
    angular
        .module("devGit")
        .controller("IssuesCtrl", IssuesCtrl)
        .config(routeConfig);
    
}