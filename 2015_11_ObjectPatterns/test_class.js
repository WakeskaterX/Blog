//test_class.js

function MyClass(name) {
 this.name = name;
}
MyClass.prototype.askName = function() {
 return "Hello, my name is "+this.name;
}

module.exports = new MyClass("testy1");