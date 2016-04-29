//require_constructor.js
var MyClass = require('./test_class_constructor.js');
var my_object = new MyClass("timmy");

var my_object2 = new (require('./test_class_constructor.js'))("joe");

console.log(my_object.askName());

console.log(my_object2.askName());