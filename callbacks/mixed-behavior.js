// https://www.poetryfoundation.org

jQuery(document).ready(function () {
  console.log("hey, the DOM is ready!");
});

console.log("Hey girl, I'm the last line of the script.");

// If the DOM has finished loading before ready gets invoked, the callback is invoked synchronously.
// Otherwise, the callback is invoked once the DOM has loaded. Therefore, these console messages could
// appear in an unreliable order in a production application

