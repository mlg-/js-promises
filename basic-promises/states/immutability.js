var lunchChoices = new Promise(function(resolve, reject){
  resolve("Foodie Cafe");
  reject("Chipotle");
  resolve("Depot Diner");
});

promise.then(function(lunch_option){
  console.log("Lunch clubbers, your fate is " + lunch_option)
});