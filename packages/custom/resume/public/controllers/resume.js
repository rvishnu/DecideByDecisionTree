'use strict';

/* jshint -W098 */
angular.module('mean.resume').controller('ResumeController' , ['ResumeService', 'resume', '$state',
    function(ResumeService, resume, $state) {
        var self = this;

        self.files = [];

        self.save = function(){
            if(self.files && self.files.length > 0) {
                self.resume.filePath = self.files[0].src;
            }
            ResumeService.saveResume(self.resume, function (resume) {
                if (resume) {
                    self.resume = resume;
                    $state.go('resumeThankYou');
                }
                else {
                    console.log("Contact Us not saved...")
                }
            });

        };

        self.uploadFinished = function(files)
        {
         //   console.log(files);
        }

        self.uploadFileCallback = function(file)
        {
            if(file) {
                console.log(file);
                self.files.push({
                    'size': file.size,
                    'type': file.type,
                    'name': file.name,
                    'src': file.src
                });
            }
        }

        self.deleteFile = function(file) {
            console.log(file);
            var index = self.files.indexOf(file);
            self.files.splice(index, 1);
        }

    }]);
