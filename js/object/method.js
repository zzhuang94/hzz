function foo() {
    console.log(this.a, 'foo');
}
var a = 100;
var bar = foo;
var obj = {
    a: 99,
    foo: foo
};
foo();
bar();
obj.foo();
