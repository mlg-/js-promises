// With callbacks

loadImage("http://i.imgur.com/D46tNX8.gif",
  function onsuccess(img) {
    document.body.appendChild(img);
  },
  function onerror(e) {
    console.log("Error occurred while getting cat on roomba.");
    console.log(e);
  }
);


function loadImage(url, success, error) {
  var img = new Image();

  img.src = url;

  img.onload = function () {
    success(img);
  };

  img.onerror = function(e) {
    error(e);
  };
}

// With promises

var promise = loadImage("http://i.giphy.com/4LgA7gSThPVVS.gif");

promise.then(function (img) {
  document.body.appendChild(img);
});

promise.catch(function (e) {
  console.log("Error occured while locating bloop cat.");
  console.log(e);
});


// More typical promises syntax involves chaning method calls

loadImage("/Users/mlg/Downloads/bloop.gif").then(function (img) {
  document.body.appendChild(img);
}).catch(function (e) {
  console.log("Error occurred in time-space continuum, bloop cat is unavailable.");
  console.log(e);
});


// implementation for loadImage that returns a promise

function loadImage(url) {
  var promise = new Promise(
    function resolver(resolve, reject) {
      var img = new Image();
      img.src = url;

      img.onload = function() {
        resolve(img);
      };

      img.onerror = function(e) {
        reject(e);
      };
    }
  );
  return promise;
}
