define(function (require) {

    var Marionette = require('marionette');
    //var EntryTemplate = require('app/Modules/Home/Templates/Entry.html');

    var Header = Marionette.ItemView.extend({
        template: "#header_template",
        className: 'header'
    });

    return Header;
});