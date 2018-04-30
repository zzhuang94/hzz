function foo() {
    var a = 3;
    function bar() {
        console.log(a);
    }
    return bar;
}

var baz = foo();
baz(); // this is closure

// console.log(a); ReferenceError
