/**
 * Created by rvishnu on 6/11/15.
 */
'use strict';
(function (app) {

  app.controller('TreeController', ['TreeService', 'Node', '$stateParams', '$uibModal', 'MeanUser','$rootScope',
    function (TreeService, Node, $stateParams, $modal, MeanUser,$rootScope) {
      var self = this;

      self.node;

      self.bodyCss;



      if ($stateParams.nodeid) {

          $rootScope.state = TreeService.getCSS($stateParams.nodeid);

          self.node = TreeService.getNodeById($stateParams.nodeid);

        if(!self.node)
        {
            var nodePromise = TreeService.getTree($stateParams.nodeid);
            nodePromise.then(function(result){
                self.node = result;
                //self.node = TreeService.getNodeById($stateParams.nodeid);
                var children = self.node.children;
                var arrangedNode = [];
                if(children.length > 0) {
                    console.log('sequence' + children[0].sequence);
                    if (children[0].sequence) {
                        for (var i = 0; i < children.length; i++) {
                            if (children[i].sequence !== 'undefined') {
                                arrangedNode[children[i].sequence] = children[i];
                            }

                        }
                        self.node.children = arrangedNode;
                    }
                }
            })
        }
      } else {
        self.node = rootNode;
      }

        self.hasAuthorization = function() {
            return MeanUser.isAdmin;
        };

      self.saveTree = function () {
        TreeService.saveTree();

      };

      self.getArticleId = function(articleNode)
      {
          if(articleNode) {
              var article = JSON.parse(articleNode);
              return article.articleId;
          }
      }

      self.getNodeId = function(decideNode)
      {
          if(decideNode) {
              var decide = JSON.parse(decideNode);
              return decide.decideId;
          }
      }

      self.confirmDelete = function(node, parentNode){
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'dtree/views/deleteModal.html',
          controller: 'DeleteModalInstanceCtrl as ctrll',
          size: 'sm',
          resolve: {
            node: function () {
              return node;
            },
            parentNode: function() {
              return parentNode;
            }
          }
        });

        modalInstance.result.then(function (node) {
            self.node = node;
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

          self.editNode = function(node, parentNode) {
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'dtree/views/editNodeModal.html',
          controller: 'EditModalInstanceCtrl as ctrll',
          size: 'lg',
          resolve: {
            node: function () {
              return node;
            },
            parentNode: function() {
              return parentNode;
            }
          }
        });

        modalInstance.result.then(function (node) {
          if(node)
          self.node = node;
        //    self.node = TreeService.getNodeById($stateParams.nodeid);
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      }
  }]);

  app.directive('diSanitizeString', function(){
    return {
      controller : "DiSanitizeStringCtrl as sctrl",
      scope:{
        stringToSanitize : '=diSanitizeString'
      },
      templateUrl:'dtree/views/sanitizeString.html',
      bindToController: true
    }

  });

  app.controller('DiSanitizeStringCtrl', ['$sce', function($sce){
    var self = this;

    self.sanitizedString = $sce.trustAsHtml(self.stringToSanitize);

  }]);

  app.directive('diGetContent', function(){
    return {
      templateUrl:'dtree/views/GetContent.html',
      controller: "GetContentCtrl as gctrl",
      scope: {
        node: '=node'
      },
      bindToController: true
    }
    });

  app.directive('diTree', function(){
    return{
      templateUrl:'dtree/views/TreeDirective.html',
      controller: 'DirectiveTreeCtrl as dtCtrl',
      scope: {
        node: '=node'
      },
      bindToController: true
    }
  });

  app.controller('DirectiveTreeCtrl', function(){
      var self = this;

      self.getArticleId = function(articleNode)
      {
          var article = JSON.parse(articleNode);
          return article.articleId;
      }

      self.getNodeId = function(decideNode)
      {
          var decide = JSON.parse(decideNode);
          return decide.decideId;
      }

  });

    app.controller('GetContentCtrl', ['$window', '$location', '$state', function($window, $location, $state){
      var self = this;
      self.redirect = false;
      var articles = '/articles';
      var resume = '/resume';

      if(self.node && self.node.pageURL!= undefined && self.node.pageURL) {
          if (self.node.pageURL.indexOf("http") != -1) {
              self.redirect = true;
              $window.open(self.node.pageURL, "_self");
          }
          else if(self.node.pageURL.indexOf('article')!= -1)
          {
              var article = JSON.parse(self.node.pageURL);
              var articleId = article.articleId;
              $state.go('article by id', {articleId: articleId});
          }
          else if(self.node.pageURL.indexOf('decide')!= -1)
          {
              $state.go('decide', self.node.pageURL, {location:true});
          }
          else if(self.node.pageURL.indexOf('resume')!= -1)
          {
              $state.go('createResumeInfo');
          }
      }
   }]);


})(angular.module('mean.dtree'));

/*

 self.toggleAddNode = function () {
 self.addNode = true;
 };

 self.toggleDeleteNode = function () {
 self.editNode = true;
 };




 self.addNode = false;

 self.editNode = false;

 self.getTree = function(){
 TreeService.getTree(function(tree){
 self.node = tree;
 })
 }*/
//self.getTree();

/*    self.getNode = function(node){
 self.node = node;
 };

 self.addChildNode = function () {
 self.newNode.id = TreeService.generateUUID();
 self.newNode.parentId = self.node.id;
 self.node.children.push(angular.copy(self.newNode));
 self.newNode = new Node();
 self.addNode = false;
 self.editNode = false;
 };

 self.editNode = function () {

 };

 self.deleteNodeAndChildren = function (node) {
 for (var i = 0; i < self.node.children.length; i++) {
 var childNode = self.node.children[i];
 if (childNode.id === node.id) {
 self.node.children.splice(i, 1);
 break;
 }
 }
 self.addNode = false;
 self.editNode = false;
 };
 */

