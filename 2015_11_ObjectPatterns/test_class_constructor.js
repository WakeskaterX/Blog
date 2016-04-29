//test_class_constructor.js

function MyClass(name) {
 this.name = name;
}
MyClass.prototype.askName = function() {
 return "Hello, my name is "+this.name;
}

module.exports = MyClass;