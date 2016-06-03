define(function (require) {
    var Marionette = require('marionette');
    var PostController = require('app/Modules/Post/Controller');
    var Router = require('app/Modules/Post/Router');


    var app = Marionette.Application.extend({
        initialize: function(){

        }
    });

    var AppHome = new app();

    AppHome.on('start', function(){
        console.log('onstart post');
        var postController = new PostController();
    });

    return AppHome;
})
