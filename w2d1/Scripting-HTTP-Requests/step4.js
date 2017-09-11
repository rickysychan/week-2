var https = require('https');

function getHTML (options, callback) {

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

function printHTML (HTML) {
  console.log(HTML);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)