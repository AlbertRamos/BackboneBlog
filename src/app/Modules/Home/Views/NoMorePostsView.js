define(function (require) {

    var Marionette = require('marionette');
    var Template = require('text!app/Modules/Home/Templates/NoMorePostsTemplate.html');

    return Marionette.ItemView.extend({
        template: Template,
        className: 'post-preview'
    });

});