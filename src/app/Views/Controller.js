define(function (require) {
    var Marionette = require('marionette');

    var Controller = Marionette.Object.extend({
        initialize: function(){
            console.log("controller");
        },
        start: function () {

            console.log("start");
        },
        filterItems: function () {
            console.log('filter items');
        }
    });

    return Controller;
})
