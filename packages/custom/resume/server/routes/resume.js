'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Resume, app, auth, database) {

    var resumeController = require('../controllers/resume');

    app.route('/api/resume').post(resumeController.save);
};
