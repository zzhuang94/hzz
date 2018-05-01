var obj = {
    a: 2,
    b: 3
};
Object.defineProperty(obj, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configureable: false,
    value: function() {
        console.log("init..");
        var o = this;
        var index = 0;
        var keys = Object.keys(o);
        return {
            next: function() {
                console.log("aaa", index);
                return {
                    value: o[keys[index++]],
                    done: (index > keys.length)
                }
            }
        }
    }
});
var it = obj[Symbol.iterator]();
while(true) {
    var n = it.next();
    console.log(n, 'iterator');
    if (n.done) {
        break;
    }
}
console.log('-------------');
for (var v of obj) {
    console.log(v, "VAL");
}
