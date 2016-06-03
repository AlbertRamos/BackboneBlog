define(function (require) {

    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var RootLayout = require('app/Views/DefaultLayout');
    var Controller = require('app/Views/Controller');
    var Router = require('app/Views/Router');

    var HomeApp = require('app/Modules/Home/app');
    var PostApp = require('app/Modules/Post/app');


    // Create our Application
    var App = Marionette.Application.extend({
        setRootLayout: function () {
            this.rootLayout = new RootLayout();
        }
    });

    var MainApp = new App();

// Start history when our application is ready
    MainApp.on('before:start', function() {
        MainApp.setRootLayout();
    });


    MainApp.on('start', function () {
        /*var controller = new Controller();
         controller.router = new Router({
            controller: controller
         });
        controller.start();*/

        HomeApp.start();
        PostApp.start();

        Backbone.history.start();
    });

    MainApp.start();



});