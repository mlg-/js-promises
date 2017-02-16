// node module for making http requests
var http = require('http');

http.get("http://isdonaldtrumpthepresident.com/", function(res){
  console.log("unfortunately, this is a real website, and we just got it.");
});

