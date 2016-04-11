/**
 * Created by rvishnu on 7/5/15.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var NodeModel = mongoose.model('NodeModel');

var treeCache = new Array();

/**
 * Signup
 */
exports.updateTree = function (req, res) {

  // Init Variables

  var newTree = req.body;

  // Then save the user
  NodeModel.findOneAndUpdate({version: "1"}, {tree: newTree}, {new: false}, function (err, updateTree) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json(updateTree);
    }
  });
};

/**
 * Recursive function to create the tree. All mongoose functions are promises. So calling the recursive method inside
 * the saved method.
 * @param rootNode
 * @param parentNode
 */
function createTree(rootNode, parentNode) {
  var node = new NodeModel({name: rootNode.name, childQuestion: rootNode.childQuestion});
  if (parentNode) {
    node.parent = parentNode;
    parentNode.save(function (err) {
      if (err) {
        console.log("PARENT " + node.name);
      }
      node.save(function (err) {
        if (err) {
          console.log("CHILD " + err.name);
        }
        else {
          rootNode.children.forEach(function (item) {
            createTree(item, node);
          });
        }
      });
    });
  }
  else {
    rootNode.children.forEach(function (item) {
      createTree(item, node);
    });
  }
}

/**
 * Save the entire tree
 * @param req
 * @param res
 */
exports.saveTree = function (req, res) {
  var rootNode = req.body;
  createTree(rootNode);
  res.send(rootNode);
}

/**
 * The tree has a root node, which has only one node which will be sent to the user. The initial node is a dummy node to
 * get around the code. Need to check the logic.
 * @param req
 * @param res
 */
exports.getTree  = function(req, res) {
  var args = {
    recursive:true
  }
  console.log("Parameter from request " + req.param('nodeId'));
    var nodeId = req.param('nodeId');
    var id = mongoose.Types.ObjectId(nodeId);
    var admin = req.user != undefined && req.user.roles != undefined && req.user.roles.indexOf('admin') !== -1;
    console.log("IS ADMIN" + admin);
    if( admin || !treeCache[nodeId]) {
        NodeModel.findById(id, function (err, node) {

            if (err) {
                console.log("Couldn't find the passed in node");
            }
            else {
                /*      NodeModel.findById(node._id, function( err, rootNode) {
                 if (err) {
                 console.log("Couldn't find the root node");
                 } else {*/
                NodeModel.getChildrenTree(node, args, function (err, tree) {
                    if (!err) {
                        var parentNode = node.toObject();
                        parentNode.children = tree.slice();
                        treeCache[nodeId] = parentNode;
                        res.send({tree: parentNode});
                    }
                });
                //}
                //});
            }

        });
    }
    else{
        res.send({tree: treeCache[nodeId]});
    }
}
