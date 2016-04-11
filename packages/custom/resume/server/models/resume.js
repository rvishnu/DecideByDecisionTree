'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Resume Schema
 */
var ResumeSchema = new Schema({
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
    linkedinProfileUrl: {
        type: String,
        trim: true
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    shareResumeUrl: {
        type: String,
        trim: true
    },
    contacted: {
        type: Boolean,
        default: false
    },
    filePath: {
        type: String
    },
    comments: {
        type: String,
        trim: true
    }
});


mongoose.model('Resume', ResumeSchema);
