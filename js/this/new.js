function foo(a) {
    this.a = a;
    return 100;
}
var bar = new foo(2);
console.log(bar.a);
console.log(bar);
var baz = foo(3);
console.log(baz);
console.log(a);
