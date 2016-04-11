'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Dtree = new Module('dtree');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Dtree.register(function(system, app, auth, database, articles) {

  //We enable routing. By default the Package Object is passed to the routes`
  Dtree.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Dtree.menus.add({
    title: 'Decide',
    link: 'decisionHome',
    roles: ['anonymous','all'],
    menu: 'main'
  });
  
  Dtree.aggregateAsset('css', 'style.css');
    Dtree.aggregateAsset('css', 'font.css');

    Dtree.aggregateAsset('css', 'ml-social-buttons.css');


    Dtree.aggregateAsset('fonts', 'socialglyphs-webfont.eot');

    Dtree.aggregateAsset('js', 'script.js');

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Dtree.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Dtree.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Dtree.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    app.set('views',  __dirname + '/server/views');

  return Dtree;
});
