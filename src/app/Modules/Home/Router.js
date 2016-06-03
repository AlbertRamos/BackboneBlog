define(function (require) {
    var Marionette = require('marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'show',
            'home': 'show'
        }
    });

    return Router;
})
