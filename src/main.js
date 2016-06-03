// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: '../dist/js',
    paths: {
        app: '/src/app',
        jquery: 'jquery.min',
        underscore: 'underscore.min',
        backbone: 'backbone.min',
        marionette: 'marionette.min',
        bootstrap: 'bootstrap'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        },
        'marionette': {
            deps: ['backbone'],
            exports: 'marionette'
        },
        'bootstrap': {
            deps: ['jquery']
        }

    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/app']);
