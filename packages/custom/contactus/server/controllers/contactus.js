'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    ContactUs = mongoose.model('ContactUs');

exports.save = function (req, res) {
    var contactUs = new ContactUs(req.body);
    contactUs.save(function (err, savedContactUs) {
        if (err) {
            console.log("ContactUS Not Saved" + err);
        }
        else {
            return res.json(savedContactUs);
        }
    })
};


