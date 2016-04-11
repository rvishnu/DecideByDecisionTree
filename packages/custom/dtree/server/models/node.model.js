/**
 * Created by rvishnu on 7/7/15.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var tree = require('mongoose-path-tree');
/**
 * The node represents each option.
 * Options have a name, id, path field.
 * @type {Schema}
 */
var NodeSchema = new Schema({
  /*
    Checks if this is a final node or not.
     */
  finalNode: {
      type: Boolean
  },
  name: {
    type: String,
    trim: true
  },
  sequence: {
      type: Number
  },
    commentsOnSelection  : {
        type: String,
        trim: true
    },
    /**
   * The next question to be asked on selecting this node.
   */
  childQuestion: {
    type: String,
    trim: true
  },
  /**
   * Text to display when this node is selected. By displaying the pros & cons.
   */
  helpText: {
    type: String,
    trim: true
  },
  /**
   * Tool Tip, when the user goes near this node
   */
  toolTip: {
    type: String,
    trim: true
  },
  /**
   * Template or page url. Templates should be better.
   */
  pageURL: {
    type: String,
    trim: true
  }


});
NodeSchema.plugin(tree, {});

mongoose.model('NodeModel', NodeSchema);
