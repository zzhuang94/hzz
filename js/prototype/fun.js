function Foofn() {
    console.log('AAAA');
}
var a = new Foofn();
console.log(a);
console.log(typeof a);
console.log("---------");
console.log(Object.keys(a))
console.log(a.prototype);
console.log(Foofn.prototype);
console.log(Object.getPrototypeOf(a));
console.log("---------");
