var https = require('https');

let bufferedData = null;

function getAndPrintHTML (options) {

https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log( bufferedData += data);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions)