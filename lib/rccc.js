var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var Rccc = function(){
  var self = this;

  self.url = 'http://revistacinematografica.com.ni/cartelera-cinematografica';

  /**
   * Make a request html text
   */
  self.get = function(cb){

    var options = {
      url: self.url,
      encoding:'utf-8'
    };

    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        cb(body)
      }
      else{
        cb(null);
      }
    });

  }

  self.scrap = function(cb){

    var data = [];

    self.get(function(html){
      if(html){
        var $ = cheerio.load(html);

        var rows = $(".row").each(function(i,item){
          var movie = {};

          var poster = $(item).find('div').eq(0).find('img').attr('src');

          var header = $(item).find('div').eq(1).find('h2').html().split(' <br> ');

          var duration = header[0] || '';

          var genres = header[1] || '';

          var clasification = header[2].split(':')[1] || '';

          var director = header[3].split(':')[1].replace('&#xA0;', '') || '';

          var summary = $(item).find('div').eq(1).find('h6').eq(0).text();

          var trailer = $(item).find('div').eq(1).find('h6').eq(1).find('a').attr('href');

          var title = $(item).find('div').eq(2).find('h1').text().capitalize();

          var tab = $(item).find('div').eq(2).find('div');

          var cines = [];

          var _$ = cheerio.load( $(tab).find('div').html() );

          $(tab).find('ul').find('li').each(function(i,item){

            var cine = {};

            var id = $( this ).find('a').attr('href').replace('#tabs-','');

            cine.name = $( this ).text().capitalize();

            cine.html = _$('#tabs-' + id + ' .rctandas-tabs' ).html();

            cines.push( cine );

          });

          movie.cines = cines;

          movie.poster = poster;

          movie.duration = duration;

          movie.genres = genres;

          movie.clasification = clasification

          movie.director = director

          movie.summary = summary;

          movie.title = title;

          movie.trailer = trailer;

          data.push(movie);

        });

        cb(data);

      }
      else{
        cb({});
      }
    });

  }




}

module.exports = Rccc;
