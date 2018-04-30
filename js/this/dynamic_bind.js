function foo(a1, a2, a3) {
    this.val = a1 + a2 + a3;
}
var b1 = foo.bind(null, "a1");
var b2 = foo.bind(null, "a11", "b22");
var b3 = foo.bind(null, "a111", "b222", "c333");

var c1 = new b1(12,34);
var c2 = new b2(12);
var c3 = new b3();

console.log(c1.val);
console.log(c2.val);
console.log(c3.val);
