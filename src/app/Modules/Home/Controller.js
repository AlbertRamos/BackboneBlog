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
    var PostModel = require('app/Models/Post/Post');
    var PostsCollection = require('app/Collections/Post/PostsCollection');

    /**
     * Views
     * @type {exports}
     */
    var HeaderView = require('app/Views/Header');
    var HomeLayoutView = require('app/Modules/Home/Views/HomeLayout');
    var PostsList = require('app/Modules/Home/Views/PostsList');
    var LoadPosts = require('app/Modules/Home/Views/LoadPosts');

    var HomeController = Marionette.Object.extend({
        initialize: function(){
            var self = this;
            this.router = new Router({
                controller: this
            });

        },

        success: function( posts ){
            /**
             * Layouts
             *
             */
            this.layout = new LayoutView();
            this.layout.render();
            this.homeLayout = new HomeLayoutView();
            this.homeLayout.render();

            /**
             * Collections & views
             *
             */
            var postsCollection = new PostsCollection(posts.get('data'));
            var postList = new PostsList({ collection: postsCollection });
            var loadPosts = new LoadPosts({ collection: postsCollection, model: posts });
            var headerView = new HeaderView();



            this.homeLayout.header.show(headerView);
            this.homeLayout.main.show(postList);
            this.homeLayout.footer.show(loadPosts);
        },

        show: function(){
            var self = this;

            var posts = new PostModel();
            posts
                .fetch()
                .success(function(){
                    self.success( posts );
                });
        }
    });

    return HomeController;
})
