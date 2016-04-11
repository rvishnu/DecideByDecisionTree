'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Contactus, app, auth, database) {

    var contactUsController = require('../controllers/contactus');

    app.route('/api/contactus').post(contactUsController.save);
};