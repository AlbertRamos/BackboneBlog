define(function (require) {

    var Marionette = require('marionette');
    var Template = require('text!app/Modules/Home/Templates/LoadPostTemplate.html');
    var NoMorePostsView = require('app/Modules/Home/Views/NoMorePostsView');

    var Layout = Marionette.ItemView.extend({
        template: Template,
        className: 'load_posts',

        ui: {
            container: '.load_more_container',
            button: 'button'
        },

        events: {
            'click @ui.button': 'loadPosts'
        },

        loadPosts: function(){
            var current_page = this.model.get('current_page');
            var self = this;
            this.model.fetch({ data: {
                page: current_page + 1
            }}).success(function () {
                self.success();
            });
        },

        success: function(){
            if(this.model.get('data').length > 0)
                this.collection.add(this.model.get('data'));
            else {
                var noPosts = new NoMorePostsView();
                this.ui.container.html(noPosts.render().el);
            }

        }

    });

    return Layout;
});