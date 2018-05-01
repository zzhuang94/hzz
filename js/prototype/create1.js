var a = {
    kobe: 'bryant'
};
var b = Object.create(a);
var c = Object.create(b);
console.log(c.kobe);
console.log("======")

console.log(a);
console.log(b);
console.log(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);

console.log(typeof a.__proto__);
console.log(typeof b.__proto__);
console.log(typeof c.__proto__);

console.log(typeof a.prototype);
console.log(typeof b.prototype);
console.log(typeof c.prototype);
