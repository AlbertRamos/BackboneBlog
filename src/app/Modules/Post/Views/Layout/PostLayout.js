define(function (require) {

    var Marionette = require('marionette');

    var PostLayout = Marionette.LayoutView.extend({

        template: '#single_post_layout_template',
        className: 'container',

        regions: {
            post_info: '#post_info',
            content: '#content'
        }
    });

    return PostLayout;
});