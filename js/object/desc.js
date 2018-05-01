var obj = {a: 2};
console.log(Object.getOwnPropertyDescriptor(obj, "a"));

Object.defineProperty(obj, "a", {
    value: 3,
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
console.log(obj.a);
obj.a = 99;
console.log(obj.a);

var kobe = 'bryant';
console.log(this.kobe);
console.log(this.zzhuang94);
console.log(this);

for (var v of obj) {
    console.log("val", v);
}
