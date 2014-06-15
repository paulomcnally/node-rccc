var Rccc = require('../lib/rccc');
var rccc = new Rccc();

rccc.scrap(function(response){
  console.log( JSON.stringify( response, null, 2 ) );
});
