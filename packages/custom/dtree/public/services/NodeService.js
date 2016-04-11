/**
 * Created by rvishnu on 7/12/15.
 */
'use strict';
(function (app) {

  app.factory('NodeResource', function ($resource) {
    return $resource('/api/Node/:id', null, {

      getNode: {
        method: "GET",
        isArray: true
      },

      saveNode: {
        method: "PUT",
        isArray: false
      },
      updateNode: {
        method: "POST",
        isArray: false
      },
      deleteNode: {
        method: "DELETE",
        isArray: false,
        id: '@nodeId'

      }
    })
  })

  app.service('NodeApiService', function (NodeResource) {
    var self = this;

    self.saveNode = function (Node, completionCallback) {
        NodeResource.saveNode(Node)
        .$promise
        .then(function onSuccess(response) {
          completionCallback(true, response);
        }, function onError(error) {
          completionCallback(false, error);
        });
    }

    self.updateNode = function (Node, completionCallback) {
      NodeResource.updateNode(Node)
        .$promise
        .then(function onSuccess(response) {
          completionCallback(true, response);
        }, function onError(error) {
          completionCallback(false, error);
        });
    }

    self.deleteNode = function (Node, completionCallback) {
      NodeResource.deleteNode(Node)
        .$promise
        .then(function onSuccess(response) {
          completionCallback(true, response);
        }, function onError(error) {
          completionCallback(false, error);
        });
    }

  })

  app.service('NodeCtrlService', function (NodeApiService) {
    var self = this;

    self.saveNode = function (Node, completionCallback) {
      NodeApiService.saveNode(Node, function (isValid, response) {
          if (isValid) {
          completionCallback(true, response.node);
        } else {
          completionCallback(false);
        }
      });
    }

    self.updateNode = function (Node, completionCallback) {
      NodeApiService.updateNode(Node, function (isValid, response) {

        if (isValid) {
          completionCallback(true, response.node);
        } else {
          completionCallback(false);
        }
      });
    }

    self.deleteNode = function (Node, completionCallback) {
      NodeApiService.deleteNode(Node, function (isValid, response) {
        if (isValid) {
          completionCallback(true, response.tree);
        } else {
          completionCallback(false);
        }
      });
    }

  });

  app.service('NodeService', [ 'NodeCtrlService',
    function ( NodeCtrlService) {
      var self = this;

        self.get = function(node, callback){
            NodeCtrlService.get()
        }

        self.updateNodez = function(node, callback){
            NodeCtrlService.updateNode(node, function (isValid, node) {
                if (isValid) {
                    self.updateNode = node;
                    callback(true);
                }
                else{
                    callback(false);
                }
            })
        };

        self.saveNode = function (node, parentNode, callback) {
            node.parent = parentNode._id;
            NodeCtrlService.saveNode(node,function (isValid, node) {
                if (isValid) {
                    self.savedNode = node;
                    callback(node);
                }
                else{
                        callback(false);
                    }
                })
            };

      self.deleteNode = function(node, callback){
        console.log(node);
        NodeCtrlService.deleteNode({nodeId:node._id}, function(isValid, nodes){
          if (isValid) {
            self.deletedNodes = nodes;
            callback(true);
          }
          else{
            callback(false);
          }
        });
      };
    }
  ]);


})(angular.module('mean.dtree'));

