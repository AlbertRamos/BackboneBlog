define(function (require) {

    var Marionette = require('marionette');
    //var EntryTemplate = require('app/Modules/Home/Templates/Entry.html');

    var Content = Marionette.ItemView.extend({
        template: "#single_post_info_template",
        className: 'content_info_view',

        initialize: function(){

        }
    });

    return Content;
});