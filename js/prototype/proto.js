function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
}
function Bar(name, label) {
    Foo.call(this, name);
    this.label = label;
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar("kobe", "bryant");
console.log(a.myName());
console.log(a.myLabel());

console.log("--------");
console.log(typeof Foo);
console.log(typeof Bar);
console.log(typeof a);
console.log("--------");
console.log(typeof Foo.prototype);
console.log(typeof Bar.prototype);
console.log(typeof a.prototype);
