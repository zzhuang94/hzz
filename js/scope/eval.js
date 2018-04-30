"use strict";
function foo(str, a) {
    eval(str);
    console.log(a, b);
}

var b = 100;
foo('b = 99;', 88);
console.log(b);
