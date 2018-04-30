var obj = {
    a: 100,
    foo: function fooFn() {
        console.log(this.a, "00");
    }
};
obj.a = 999;
obj.foo.call(obj);

var bar = obj.foo;
var a = 888;
bar.call(this);
