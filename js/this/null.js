function foo(a, b) {
    console.log(a, b);
}
var oo = Object.create(null);
foo.apply(oo, [2, 3]);

var bar = foo.bind(oo, 2);
bar(3);
