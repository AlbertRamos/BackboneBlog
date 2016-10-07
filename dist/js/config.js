define(function (require) {

    var Config = {
      base_url: 'http://api.blog.albertramos.me',

      getApiUrl: function(url){
        return this.base_url + url;
      }
      
    };

    return Config;
});
