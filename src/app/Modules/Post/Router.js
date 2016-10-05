define(function (require) {
    var Marionette = require('marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'post/:id': 'show'
        }
    });

    return Router;
})
