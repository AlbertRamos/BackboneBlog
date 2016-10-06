define(function (require) {
    var Backbone = require('backbone');
    var Config = require('config');

    var Post = Backbone.Model.extend({
        urlRoot: Config.getApiUrl('/posts')
    });

    return Post;
});
