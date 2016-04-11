'use strict';

angular.module('mean.resume').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('createResumeInfo', {
        controller: 'ResumeController as resumeController',
        url: '/resume/create',
      templateUrl: 'resume/views/create.html',
        resolve: {
            resume: function () {
                return {};
            }
        }
    }).state('resumeThankYou', {
            url: '/resume/thankyou',
            templateUrl: 'resume/views/thankyou.html'
        });
  }
]);
