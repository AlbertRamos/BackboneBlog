define(function (require) {
    var Backbone = require('backbone');
    var Post = require('app/Models/Post/Post');
    var Config = require('config');

    var Posts = Backbone.Collection.extend({
        model: Post,
        url: Config.getApiUrl('/posts')
    });

    return Posts;
});
