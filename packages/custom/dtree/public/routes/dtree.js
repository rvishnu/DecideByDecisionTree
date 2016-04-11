'use strict';

angular.module('mean.dtree') //, ['ngAnimate', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngSanitize'])
.config(function ($meanStateProvider,$stateProvider, $urlRouterProvider,$viewPathProvider) {
    $stateProvider
        .state('decisionHome', {
            url:'/decisionHome',
            templateUrl: 'dtree/views/index.html'
        })
        .state('tree', {
            url: '/tree/:nodeid',
            templateUrl: 'dtree/views/Tree.html',
            controller: 'TreeController as ctrl' //,
/*            resolve: {
                rootNode: ['TreeService', '$stateParams',
                    function (TreeService, $stateParams) {
                        console.log($stateParams.nodeid);
                        return TreeService.getTreeOnlyOnce($stateParams.nodeid);
                    }]
            }*/
        })
        .state('decide', {
            url: '/decide/:nodeid',
            templateUrl: 'dtree/views/Decide.html',
            controller: 'TreeController as ctrl' //,
 /*           resolve: {
                rootNode: ['TreeService','$stateParams',
                    function (TreeService,$stateParams) {
                        return TreeService.getTreeOnlyOnce($stateParams.nodeid);
                    }]
            }*/

        })
        .state('angulartree', {
            url: '/angulartree',
            templateUrl: 'dtree/views/angulartree.html',
            controller: 'TreeController as ctrl'
        });

        $urlRouterProvider.when('/Decide2GoBack', '/decide/55a08a699f6f3594a84d324e');
        $urlRouterProvider.when('/StartBusiness', '/decide/56525079d4c6ff06a9dfdafa');
        $urlRouterProvider.when('/StudyMBA', '/decide/565da4cbe4b0ed465284a065');
        $urlRouterProvider.when('/ChangeJob', '/decide/565e5523ab285b0b0047af86');
        $urlRouterProvider.when('/GetMarried', '/decide/565e578aab285b0b0047afb5');



        $urlRouterProvider.when('/ModifyDecide2GoBack', '/tree/55a08a699f6f3594a84d324e ');
        $urlRouterProvider.when('/ModifyStartBusiness', '/tree/56525079d4c6ff06a9dfdafa');
        $urlRouterProvider.when('/ModifyStudyMBA', '/tree/565da5bbe4b0ed465284a075');
        $urlRouterProvider.when('/ModifyChangeJob', '/tree/565e5523ab285b0b0047af86');
        $urlRouterProvider.when('/ModifyGetMarried', '/tree/565e578aab285b0b0047afb5');

 //       $viewPathProvider.override('system/views/index.html', 'dtree/views/index.html');

    })