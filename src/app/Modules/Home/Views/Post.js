define(function (require) {

    var Marionette = require('marionette');
    //var EntryTemplate = require('app/Modules/Home/Templates/Entry.html');

    var Layout = Marionette.ItemView.extend({
        template: "#post_template",
        className: 'post-preview'
    });

    return Layout;
});