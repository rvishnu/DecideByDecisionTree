/**
 * Created by rvishnu on 7/9/15.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var NodeModel = mongoose.model('NodeModel');


/**
 * Get the node & save. Have the parentId set when you get from front end.
 * Get the parent Id, Get from the db the parent. And save both parent & the child.
 * @param req
 * @param res
 */
exports.save = function(req, res) {

  var node =  req.body;
  var parentId = node.parent;
  var id = mongoose.Types.ObjectId(parentId);
  NodeModel.findById(id, function(err, found){
    if(found){
      var parent = found;
      var child = new NodeModel();
      console.log("Node:");
      console.log(node);
      child.name = node.name;
      child.childQuestion = node.childQuestion;
      child.sequence =node.sequence;
      child.helpText = node.helpText;
      child.toolTip = node.toolTip;
      child.pageURL = node.pageURL;
      child.parent=parent;
      parent.save(function(err, saved){
        if(saved){
          child.save(function(err, childSaved){
            if(err)
            {
              console.log("Child Not Saved");
            }
            else{
              return res.send({node:childSaved});
            }
          })
        }
          else{
            console.log(err);
        }
      })
    }
    else{
      console.log("Unable to find the parent Id");
    }
  })
 // return res.json({});

}

exports.edit = function (req, res){
    console.log(req.body);
  var node = new NodeModel(req.body);
    console.log(node);
    NodeModel.findByIdAndUpdate(node._id, node, function(err, savedNode){
      if (err) {
        console.log('Unable to updated');
      }
      else {
        return res.send({node:savedNode});
      }
    });
  }

exports.delete = function( req, res) {
  var args = {
    onDelete: 'DELETE'
  }
  var node =req.param('nodeId');
  var id = mongoose.Types.ObjectId(node);

  NodeModel.findById(id, function(err, found){
    if(found) {
      console.log(found, err);
      var nodeToBeDeleted = found;
      var results = nodeToBeDeleted.remove(args, function (err, removed) {
        if (err) {
          console.log('Unable to remove');
        }
        else {
          console.log('removed objects' + removed);
          return res.json(results);
        }
      });
    }else{
      console.log("Unable to find " + err);
    }
  });
}

