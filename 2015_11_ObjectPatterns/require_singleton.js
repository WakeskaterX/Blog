//require_singleton.js
var singleton = require('./test_class.js');

singleton.name = "Bob";

console.log(singleton.askName());