/**
 * Created by rvishnu on 7/12/15.
 */
'use strict';

(function (app) {

  app.controller('EditModalInstanceCtrl', ['NodeService', 'TreeService', '$uibModalInstance',
      'node', 'parentNode','Articles', '$state',
    function(NodeService, TreeService, $uibModalInstance, node, parentNode,Articles, $state){
      var self = this;
      self.node = node;

      self.getArticles= function()
      {
          console.log('Calling the articles');

          Articles.query({field:'title'},function(articles) {
                  self.articles = articles;
              });

      }

      self.articles = self.getArticles();

      self.createArticle = function()
      {
          self.save();
          $state.go('create article');
      }

      self.save = function() {
        if (self.editNodeForm.$valid) {
         if(!self.node.finalNode)
         {
             self.node.pageURL = '';
         }

         if(!parentNode) {
             NodeService.updateNodez(self.node, function (node) {
                 if (!node) {
                     console.log("Unable to save");
                 }
                 else {
                     TreeService.putNodeInArray(node);
                     console.log("Calling the callback");
                     $uibModalInstance.close();
                 }
             });
         }else{
             NodeService.saveNode(self.node, parentNode, function (node) {
                 if (!node) {
                     console.log("Unable to save");
                 }
                 else {
                     TreeService.putNodeInArray(node);
                /*     if(parentNode.children) {
                         parentNode.children.push(node);
                     }
                     else{*/
                     console.log(parentNode._id);
                         var nodePromise = TreeService.getTree(parentNode._id);
                         nodePromise.then(function(result){
                             parentNode = result;
                             $uibModalInstance.close(parentNode);
                             //self.node = TreeService.getNodeById($stateParams.nodeid);
                         });

               //      }
                     console.log("Calling the callback");
                 }
             });
         }
        }
        else{
          console.log("Form is invalid");
        }
      };

      self.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
  ]);
})(angular.module('mean.dtree'));
