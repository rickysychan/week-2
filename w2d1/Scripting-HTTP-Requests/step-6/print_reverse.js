var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML)

function printHTML (HTML) {

  console.log(reverseString(HTML));
}


function reverseString(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
  }