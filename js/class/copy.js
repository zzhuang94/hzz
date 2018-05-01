var foo = function fooFn() {
    console.log("aaaa");
}
var obj = {
    foo: foo,
    arr: [1,2,3,4]
};
var obj2 = {};
obj2['foo'] = obj['foo'];
obj2['arr'] = obj['arr'];
obj2.foo = function() {
    console.log('BBBBBBB');
};
obj.foo();
foo = function fooFn1() {
    console.log("CCCC");
}
obj.foo();
obj.arr[1] = 100;
console.log(obj2.arr);
