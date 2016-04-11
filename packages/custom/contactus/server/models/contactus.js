'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * ContactUs Schema
 */
var ContactUsSchema = new Schema({
    createdDate: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNo: {
        type:String,
        trim:true
    },
    reason: {
        type: String,
        trim: true
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    message: {
      type: String,
      trim: true
    }
});


mongoose.model('ContactUs', ContactUsSchema);
