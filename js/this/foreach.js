function foo(el) {
    console.log(el, this.id);
}
var id = "kobe bryant"
var obj = {id: "zzhuang"};
[1,2,3,4].forEach(foo);
