/**
 * Created by rvishnu on 7/12/15.
 */
'use strict';
(function (app) {
app.controller('DeleteModalInstanceCtrl', ['NodeService', 'TreeService','$uibModalInstance', 'node', 'parentNode',
  function(NodeService, TreeService, $uibModalInstance, node, parentNode){
    var self = this;

    self.node = node;
    console.log(self.node.name);
    var deleted= false;
    self.delete = function () {
      console.log("Inside the delete method");
      var count = NodeService.deleteNode(self.node, function(count)
      {
        if(count){
          deleted = true;
            var nodePromise = TreeService.getTree(parentNode._id);
            nodePromise.then(function(result) {
                parentNode = result;
                $uibModalInstance.close(parentNode);
            });
        }else{
          console.log('Not Deleted');
        }
      });

    };

    self.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);

})(angular.module('mean.dtree'));
