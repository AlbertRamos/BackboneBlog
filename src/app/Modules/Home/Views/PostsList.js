define(function (require) {
    var Marionette = require('marionette');
    var PostView = require('app/Modules/Home/Views/Post');

    var PostsList = Marionette.CompositeView.extend({
        childView: PostView,
        childViewContainer: '.posts',
        template: '#posts_list_template',
        className: 'container'
    });

    return PostsList;

});