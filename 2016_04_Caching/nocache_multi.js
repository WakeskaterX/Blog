//Function with No Caching

//Import the Request Module
var request = require('request');

//Set up the request options - As per the Github API we need to set the User Agent
var request_options = {
  url: 'https://api.github.com/users/WakeskaterX/repos',
  headers: {
    "User-Agent": "WakeskaterX"
  }
};

//Create a function that makes a request to the Github API
function makeRequest() {
  var start = +Date.now();
  var end = null;
  console.log("Starting request at: ", start);
  //Actual Request to Github
  request.get(request_options, function(error, response, body) {
      //We need to parse the body as it's returned as a JSON string
      try {
        var data = JSON.parse(body);
      } catch(e) { return; }
      //Log the results
      console.log("Retrieved Data, first repo recieved was: ", data[0].name);
      end = +Date.now();
      console.log("Ending request at: ", end);
      console.log("Request Duration: ", end-start);
  });
}
//Make the request
setTimeout(makeRequest, 0);
setTimeout(makeRequest, 1000);
setTimeout(makeRequest, 2000);
setTimeout(makeRequest, 3000);