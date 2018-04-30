function foo(num) {
    console.log("foo", num);
    this.count ++;
    foo.count ++;
    count ++;
}
var count = 0;
foo.count = 0;
for (var i=0; i<5; i++) {
    foo(i);
}
    
foo.call(foo, i);
console.log(foo.count);
console.log(count);
