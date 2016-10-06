define(function (require) {

    var Config = {
      base_url: 'http://api.blogjs.io',

      getApiUrl: function(url){
        return this.base_url + url;
      }
      
    };

    return Config;
});
