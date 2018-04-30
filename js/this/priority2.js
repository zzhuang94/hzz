function foo(sth) {
    this.a = sth;
}
function bind(fn, obj) {
    return function() {
        fn.apply(obj, arguments);
    }
}
var obj1 = {};
var bar = bind(foo, obj1);
bar(2);
console.log(obj1.a);
var baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);
console.log("-------------");

var bar1 = foo.bind(obj1);
bar1(2);
console.log(obj1.a);
var baz = new bar1(3);
console.log(obj1.a);
console.log(baz.a);
