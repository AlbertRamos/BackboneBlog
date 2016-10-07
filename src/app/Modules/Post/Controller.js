define(function (require) {
    var Marionette = require('marionette');
    /**
     * Routers, controllers & layouts
     * @type {exports}
     */
    var Router = require('app/Modules/Post/Router');
    var LayoutView = require('app/Views/DefaultLayout');
    var PostLayoutView = require('app/Modules/Post/Views/Layout/PostLayout');


    /**
     * Models & collections
     * @type {exports}
     */
    var PostModel = require('app/Models/Post/Post');

    /**
     * Views
     * @type {exports}
     */
    var HeaderView = require('app/Views/Header');
    var PostInfoView = require('app/Modules/Post/Views/PostInfo');
    var PostContentView = require('app/Modules/Post/Views/PostContent');

    var HomeController = Marionette.Object.extend({
        initialize: function(){
            var self = this;
            this.router = new Router({
                controller: this
            });
        },

        success: function( posts ){
            /**
             * DefaultLayout
             * @type {LayoutView}
             */
            this.layout = new LayoutView();
            this.layout.render();

            /**
             * Views
             * @type {HeaderView}
             */
            var headerView = new HeaderView({ model: this.post });
            var postInfoView = new PostInfoView({ model: this.post });
            var postContentView = new PostContentView({ model: this.post });



            this.layout.header.show(headerView);
            this.layout.main.show( this.postLayout );
            this.postLayout.post_info.show(postInfoView);
            this.postLayout.content.show(postContentView);
            $('[data-gist]').gist();
        },

        show: function ( id ) {
            var self =  this;
            this.layout = new LayoutView();
            this.postLayout = new PostLayoutView();

            this.post = new PostModel({ id: id });

            this.post
                .fetch()
                .success(function(){
                    self.success();
                });


        }
    });

    return HomeController;
})
