define(function (require) {

    var Marionette = require('marionette');
    var Template = require('text!app/Modules/Home/Templates/HomeLayoutTemplate.html');

    return Marionette.LayoutView.extend({
        template: _.template(Template),
        el: '#app_main',
        regions: {
            header: '#home_header',
            main: '#home_main',
            footer: '#home_footer'
        }
    });
});