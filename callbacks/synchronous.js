var cities = ["Boston", "New York", "Chicago", "Washington, D.C."];

function callback(city) {
  console.log("Hello from " + city);
}

cities.forEach(callback);

// forEach's callback is invoked synchronously, i.e. before the function itself returns
