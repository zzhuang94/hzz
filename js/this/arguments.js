function foo(sth) {
    console.log(this.a, sth);
    return this.a + sth;
}
var obj = {a: 2};
var bar = function() {
    return foo.apply(obj, arguments);
}
var b = bar(3);
console.log(b);
