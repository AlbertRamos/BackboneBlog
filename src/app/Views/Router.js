define(function (require) {
    var Marionette = require('marionette');

    var Router = Marionette.AppRouter.extend({
        appRoutes: {
            'test': 'filterItems'
        }
    });

    return Router;
})
