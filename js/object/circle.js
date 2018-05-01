var a = ['A'];
var b = ['B'];

// a.push(b);
// b.push(a);
a.push(JSON.parse(JSON.stringify(b)));
b.push(JSON.parse(JSON.stringify(a)));

console.log(a);
console.log(b);
