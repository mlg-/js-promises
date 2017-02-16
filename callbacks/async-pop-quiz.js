//Pop Quiz...!

var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();

var timestamp = Date.now() + 3000;
while(Date.now() < timestamp);

function listener(){
  console.log("oh hey, I'm a listenerrrrrrr");
}

xhr.addEventListener('load', listener);
xhr.addEventListener('error', listener);