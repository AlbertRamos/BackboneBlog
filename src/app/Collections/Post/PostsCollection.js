define(function (require) {

    var Backbone = require('backbone');
    var Post = require('app/Models/Post/Post');

    var Posts = Backbone.Collection.extend({
        model: Post,
        url: 'http://api.blogjs.io/posts'
    });

    return Posts;
});