var arr = [1,2,3,4555,55,7];
for (var v of arr) {
    console.log(v);
}
var it = arr[Symbol.iterator]();
while(true) {
    var n = it.next();
    console.log(n);
    if (n.done) {
        break;
    }
}
