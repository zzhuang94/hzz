function foo() {
    console.log("name: " + this.name);
}
var obj1 = {name: '111'};
var obj2 = {name: '222'};
var obj3 = {name: '333'};
var fooOBJ = foo.softBind(obj1);
fooOBJ();
obj2.foo = foo.softBind(obj1);
obj2.foo();
fooOBJ.call(obj3);
setTimeout(obj2.foo, 10);
