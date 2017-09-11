var https = require('https');

module.exports = function getHTML (options, callback) {

let bufferedData = null;

https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    bufferedData += data;
  });

  response.on('end', function() {
    callback(bufferedData);
  });

});

}




