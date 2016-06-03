define(function (require) {
    var Marionette = require('marionette');
    var HomeController = require('app/Modules/Home/Controller');
    var Router = require('app/Modules/Home/Router');


    var app = Marionette.Application.extend({
        initialize: function(){
            console.log('app initialize');
        }
    });

    var AppHome = new app();

    AppHome.on('start', function(){
        console.log('on appstart');
        var homeController = new HomeController();
    });

    return AppHome;
})
