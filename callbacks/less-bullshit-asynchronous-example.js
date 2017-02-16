// node callbacks/less-bullshit-asynchronous-example.js

// fs is a Node.js module, here we are loading it in so we have access to its functions
var fs = require('fs');
// let's create a new timestamp string for use later
var timestamp = new Date().toString();

// writeFile is another function available from the fs module, but it invokes a callback, if one is passed
// as the last parameter, asynchronously
fs.writeFile('date.txt', timestamp, function (err) {
  if (err) throw err;

  fs.readFile('date.txt', function(err, contents) {
    if (err) throw err;
    // Once again, we are going to write some things to the console so we can see what order they run in
    console.log("Oh hey, I'm poking around in this file!"); // 2
    console.assert(contents == timestamp); // 3
  });
});

console.log("Hey girl, I'm the last line of the script!"); // 1
