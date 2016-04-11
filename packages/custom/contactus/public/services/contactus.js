/**
 * Created by rvishnu on 7/12/15.
 */
'use strict';
(function (app) {


    app.factory('ContactUsResource', function ($resource) {
        return $resource('/api/contactus/:id',null,  {
            saveContactUs: {
                method: "POST",
                isArray: false
            }
        })
    });

    app.service('ContactUsApiService', function (ContactUsResource) {
        var self = this;


        self.saveContactUs = function (ContactUs, completionCallback) {
            ContactUsResource.saveContactUs(ContactUs)
                .$promise
                .then(function onSuccess(response) {
                    completionCallback(true, response);
                }, function onError(error) {
                    completionCallback(false, error);
                });
        };


    });

    app.service('ContactUsCtrlService', function (ContactUsApiService) {
        var self = this;

        self.saveContactUs = function (ContactUs, completionCallback) {
            ContactUsApiService.saveContactUs(ContactUs, function (isValid, response) {
                if (isValid) {
                    completionCallback(true, response);
                } else {
                    completionCallback(false);
                }
            });
        };


    });

    app.service('ContactUsService', [ 'ContactUsCtrlService',
        function ( ContactUsCtrlService) {
            var self = this;



            self.saveContactUs = function (ContactUs, callback) {
                ContactUsCtrlService.saveContactUs(ContactUs, function (isValid, ContactUs) {
                    if (isValid) {
                        self.savedContactUs = ContactUs;
                        callback(ContactUs);
                    }
                    else {
                        callback(false);
                    }
                })
            };


        }
    ]);


})(angular.module('mean.contactus'));

