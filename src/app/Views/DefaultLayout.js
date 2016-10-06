define(function (require) {

    var Marionette = require('marionette');
    var HomeLayoutView = require('app/Modules/Home/Views/HomeLayout');
    var Template = require('text!app/Templates/DefaultLayoutTemplate.html');

    var Layout = Marionette.LayoutView.extend({
        template: _.template(Template),
        el: '#app',
        regions: {
            header: '#app_header',
            main: '#app_main',
            footer: '#app_footer'
        }
    });

    return Layout;
});