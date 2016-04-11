/**
 * Created by rvishnu on 7/5/15.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var TreeSchema = new Schema({
  version: {
    type: String,
    trim: true,
    default: ''
  },
  tree: {
    type: String,
    trim: true
  }
});

mongoose.model('TreeModel', TreeSchema);
