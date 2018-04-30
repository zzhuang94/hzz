// setTimeout(function(){
//     console.log('aaaa');
// }, 500);
// 
// undefined = false;
// var a;
// if (a === undefined) {
//     console.log(a);
// }
// console.log('=================');

undefined = true;
(function test(undefined) {
    var b;
    if (b === undefined) {
        console.log('nonono');
    }
})();
console.log('=================');
