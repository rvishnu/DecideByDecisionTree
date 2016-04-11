'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Resume = new Module('resume');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Resume.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Resume.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  /*Resume.menus.add({
    title: 'resume example page',
    link: 'resume example page',
    roles: ['authenticated'],
    menu: 'main'
  });  */
  
  Resume.aggregateAsset('css', 'resume.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Resume.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Resume.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Resume.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Resume;
});
