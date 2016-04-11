'use strict';

/* jshint -W098 */
angular.module('mean.contactus').controller('ContactUsController', ['ContactUsService', 'contactUs', '$window',
  function(ContactUsService, contactUs, $window) {
    var self = this;

      self.save = function(){
          ContactUsService.saveContactUs(self.contactUs, function (contactUs) {
              if (contactUs) {
                  self.contactUs = contactUs;
                  $window.history.back();
              }
              else {
                  console.log("Contact Us not saved...")
              }
          });

      };
  }
]);
