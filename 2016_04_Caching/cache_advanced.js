//Function with Caching

//Import the Request Module
var request = require('request');

//Set up the request options - As per the Github API we need to set the User Agent
var request_options = {
  url: 'https://api.github.com/users/WakeskaterX/repos',
  headers: {
    "User-Agent": "WakeskaterX"
  }
};

var repo_cache = {
  result: null,
  last_updated: +Date.now(),
  timeout: 1000
};

//Create a function that makes a request to the Github API
function makeRequest() {
  var start = +Date.now();
  var end = null;
  console.log("Starting request at: ", start);

  //If we have a result in the cache AND the cache is still fresh, simply use that and log it
  if (repo_cache.result && repo_cache.last_updated + repo_cache.timeout > +Date.now()) {
    var cached_data = repo_cache.result;
    logResults(cached_data);
    return;
  } else {  //Otherwise go get the data
    //Actual Request to Github
    request.get(request_options, function(error, response, body) {
        //We need to parse the body as it's returned as a JSON string
        try {
          var data = JSON.parse(body);
        } catch(e) { return; }

        repo_cache.result = data;
        repo_cache.last_updated = +Date.now();

        //Log the results
        logResults(data);
    });
  }

  function logResults(data) {
    console.log("Retrieved Data, first repo recieved was: ", data[0].name);
    end = +Date.now();
    console.log("Ending request at: ", end);
    console.log("Request Duration: ", end-start);
  }
}
//Make the request
setTimeout(makeRequest, 0);
setTimeout(makeRequest, 1000);
setTimeout(makeRequest, 2000);
setTimeout(makeRequest, 3000);