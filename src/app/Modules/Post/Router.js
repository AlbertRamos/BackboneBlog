define(function (require) {
    var Marionette = require('marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'post/:1': 'show'
        }
    });

    return Router;
})
