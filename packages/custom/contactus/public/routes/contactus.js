'use strict';

angular.module('mean.contactus').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('CreateContactUs', {
        controller: 'ContactUsController as contactUsController',
        url: '/contactus/create/:nodeid',
        templateUrl: 'contactus/views/create.html',
        resolve: {
            contactUs: function ($stateParams) {
                return {nodeid: $stateParams.nodeid};
            }
        }
    });
    }
]);
