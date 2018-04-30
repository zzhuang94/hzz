function foo(a) {
    var b = 1;
    bar = function(c) {
        console.log( a, b, c );
    }
    bar( b * 3 );
    b = 222;
}
a = 100;
foo( 2 ); // 2, 4, 12

console.log(b);
