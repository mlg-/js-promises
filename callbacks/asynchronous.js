function repositionElement(){
  console.log("repositioning!");
}

window.requestAnimationFrame(repositionElement);
console.log("Hey girl, I'm the last line of the script.");

// requestAnimationFrame's callback is invoked asynchronously, aka after the function itself returns
