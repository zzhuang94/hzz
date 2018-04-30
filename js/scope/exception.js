function foo(a) {
    var b = 9;
    console.log(a + b);
    a = function(){
        b = 999;
    }();
    console.log(b);
}

b = 111;
foo(100);
console.log(b);

for (var i = 0; i < 1; i++){
    var b = 1000;
}
console.log(b);
