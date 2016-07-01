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

       

    })
