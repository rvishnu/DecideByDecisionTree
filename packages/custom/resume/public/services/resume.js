/**
 * Created by rvishnu on 7/12/15.
 */
'use strict';
(function (app) {


    app.factory('ResumeResource', function ($resource) {
        return $resource('/api/resume/:id',null,  {
            saveResume: {
                method: "POST",
                isArray: false
            }
        })
    });

    app.service('ResumeApiService', function (ResumeResource) {
        var self = this;


        self.saveResume = function (Resume, completionCallback) {
            ResumeResource.saveResume(Resume)
                .$promise
                .then(function onSuccess(response) {
                    completionCallback(true, response);
                }, function onError(error) {
                    completionCallback(false, error);
                });
        };


    });

    app.service('ResumeCtrlService', function (ResumeApiService) {
        var self = this;

        self.saveResume = function (Resume, completionCallback) {
            ResumeApiService.saveResume(Resume, function (isValid, response) {
                if (isValid) {
                    completionCallback(true, response);
                } else {
                    completionCallback(false);
                }
            });
        };


    });

    app.service('ResumeService', [ 'ResumeCtrlService',
        function ( ResumeCtrlService) {
            var self = this;



            self.saveResume = function (Resume, callback) {
                ResumeCtrlService.saveResume(Resume, function (isValid, Resume) {
                    if (isValid) {
                        self.savedResume = Resume;
                        callback(Resume);
                    }
                    else {
                        callback(false);
                    }
                })
            };


        }
    ]);


})(angular.module('mean.resume'));

