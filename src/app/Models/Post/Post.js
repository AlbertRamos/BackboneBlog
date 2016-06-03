define(function (require) {

    var Backbone = require('backbone');

    var Post = Backbone.Model.extend({
        urlRoot: 'http://api.blogjs.io/posts'
    });

    return Post;
});