'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Dtree, app, auth) {

    var nodeController = require('../controllers/node.controller');

    var hasAuthorization = function(req, res, next) {
        if (req.user.roles.indexOf('admin') === -1) {
            return res.status(401).send('User is not authorized');
        }
        next();
    };

    app.route('/api/Node').post(auth.requiresLogin, hasAuthorization,nodeController.edit);
    app.route('/api/Node').put(auth.requiresLogin, hasAuthorization,nodeController.save);
    app.route('/api/Node').delete(auth.requiresLogin, hasAuthorization,nodeController.delete);

    var treeController = require('../controllers/tree.controller');

    app.route('/api/Tree').post(auth.requiresLogin, hasAuthorization,treeController.updateTree);
    app.route('/api/Tree').put(auth.requiresLogin, hasAuthorization,treeController.saveTree);
    app.route('/api/Tree/').get(treeController.getTree);

    /*
  app.get('/api/dtree/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/dtree/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/dtree/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/dtree/example/render', function(req, res, next) {
    Dtree.render('index', {
      package: 'dtree'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });*/
};
