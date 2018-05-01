var a = 100;
var b = a;
b = 99;
console.log(a);

var a = "kobe";
var b = a;
b = 'bryant';
console.log(a);

var a = [1,2,3,4];
var b = a;
b[0] = 123;
console.log(a);

function cFn() {
    console.log('CCCC');
};
var a = {
    a: 'a',
    b: 123,
    c: cFn,
    d: {d: 'DDDD'}
};
// var b = a;
// b.a = 100;
// b.b = "BBB";
// b.c = function bFn() {
//     console.log("BBBB");
// };
// b.d = {bd: "BD"};
// console.log(a);

var b = JSON.parse(JSON.stringify(a));
a.c();
// b.c();
console.log(a);
console.log(b);
