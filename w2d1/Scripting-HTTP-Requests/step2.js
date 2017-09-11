var https = require('https');

let bufferedData = null;

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log( bufferedData += data);
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });

});
}

getAndPrintHTML();
console.log(bufferedData);