// fs is a Node.js module, here we are loading it in so we have access to its functions
var fs = require('fs');
// let's create a new timestamp string for use later
var timestamp = new Date().toString();
// hoisting the contents var, which we will define later
var contents;

// writeFileSync is a synchronous function available from the Node.js 'fs' module that here is letting
// us write our timestamp to the date.txt file
fs.writeFileSync('date.txt', timestamp);

// next up, we're defining that earlier var, contents, by whatever we can read from our date.txt file
contents = fs.readFileSync('date.txt');

// Now we're going to output some statements so we can see in what order they appear in the console
console.log("I'm in your console, checking out your files!"); // 1
console.assert(contents == timestamp); // 2
console.log("Hey girl, I'm the last line of the script."); // 3
