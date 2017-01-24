var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFile('date.txt', timestamp);

fs.readFile('date.txt', function(err, data) {
  if (err) throw err;
  contents = data;
}); // third

console.log("Hey, I'm checking out what's in this file!"); // first
console.assert(timestamp == contents); // This will run 2nd, and fail

// readFile's callback is invoked asynchronously, so readFile is guaranteed to return before invoking it
// to understand why, you have to know about run-to-completion and the event loop!
