function fa() {
    console.log("FA");
}
var obj = {
    o: true
};
var arr = [];
var myObj = {
    a: 2,
    b: obj,
    c: arr,
    d: fa
};
arr.push(obj, myObj);

console.log(arr);
console.log(myObj);

console.log(arr[1].c[1].a);
console.log(myObj["c"][1]["c"][1].b.o);
arr[1].c[1].c[1].d();
