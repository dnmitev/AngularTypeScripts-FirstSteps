module app.devs {
    
    class DevsCtrl {
        
    }

    function routeConfig($stateProvider: ng.ui.IStateProvider) {
        $stateProvider.state('devs', {
            url: '/devs',
            templateUrl: 'app/devs/devs.html',
            controller: 'DevsCtrl',
            controllerAs: 'vm'
        })
    }
    
    angular
        .module("devGit")
        .controller("DevsCtrl", DevsCtrl)
        .config(routeConfig);
    
}