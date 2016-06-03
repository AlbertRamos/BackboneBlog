define(function (require) {

    var Marionette = require('marionette');

    var Layout = Marionette.LayoutView.extend({

        el: '#app',

        regions: {
            header: '#app_header',
            main: '#app_main',
            footer: '#app_footer'
        }
    });

    return Layout;
});