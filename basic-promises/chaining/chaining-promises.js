// All the ways `then` can be fulfilled

Promise.resolve("ta-da!").then(
  function stepTwo(result) {
    console.log("Step Two Received " + result);
    return "Greetings from the second step!"; // explicit return
  }
).then(
  function stepThree(result) {
    console.log("Step Three receieved " + result); // no explicit return val here
  }
).then(
    function stepFour(result) {
      console.log("Step Four receieved " + result);
      return Promise.resolve('some fulfilled magical value'); // returning anoooother promise here..!
  }
).then(
    function stepFive(result) {
      console.log("Step Five received " + result);
    }
);