define(function (require) {
    var Marionette = require('marionette');
    /**
     * Routers, controllers & layouts
     * @type {exports}
     */
    var Router = require('app/Modules/Home/Router');
    var LayoutView = require('app/Views/DefaultLayout');

    /**
     * Models & collections
     * @type {exports}
     */
    var PostsCollection = require('app/Collections/Post/PostsCollection');

    /**
     * Views
     * @type {exports}
     */
    var HeaderView = require('app/Views/Header');
    var PostsList = require('app/Modules/Home/Views/PostsList');

    var HomeController = Marionette.Object.extend({
        initialize: function(){
            var self = this;
            this.router = new Router({
                controller: this
            });
            this.show();
        },

        success: function( posts ){
            var postList = new PostsList({ collection: posts });
            var headerView = new HeaderView();


            this.layout.header.show(headerView);
            this.layout.main.show(postList);

        },

        show: function(){
            console.log("lalla");
            var self = this;
            this.layout = new LayoutView();

            var posts = new PostsCollection();

            posts
                .fetch()
                .success(function(){
                    self.success( posts );
                });
        }
    });

    return HomeController;
})
