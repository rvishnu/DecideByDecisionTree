'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Resume = mongoose.model('Resume');

exports.save = function (req, res) {
    var resume = new Resume(req.body);
    resume.save(function (err, savedResume) {
        if (err) {
            console.log("ContactUS Not Saved" + err);
        }
        else {
            return res.json(savedResume);
        }
    })
};


