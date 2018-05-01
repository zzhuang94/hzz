var kobe = {
    a: 100,
    // get a() {
    //     return this._a;
    // },
    // set a(val) {
    //     this._a = val * 2;
    // }
    b: function() {
        console.log("BBBB");
    }
};
console.log(Object.keys(kobe));
for (var key in kobe) {
    console.log(key, kobe[key], "999")
}
console.log(kobe.prototype);
console.log(kobe.__proto__);
console.log("----------");
Object.defineProperty(kobe, "a", {
    writable: false
});
var k = Object.create(kobe);
k.a = 10;
console.log(k.a);
k.b();

var o1 = {a: 1};
var o2 = Object.create(o1);
console.log(Object.keys(o2));
o2.a ++;
console.log(o1.a);
console.log(o2.a);
console.log(Object.keys(o2));
