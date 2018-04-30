for (let i = 0; i < 3; i ++) {
    setTimeout(function timer() {
        console.log(i, 'A');
    }, i * 1000);
}
console.log('-----------');
for (var i = 0; i < 3; i ++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j, 'B');
        }, j * 1000);
    })(i);
}
console.log('-----------');
for (var i = 0; i < 3; i ++) {
    let j = i;
    setTimeout(function timer() {
        console.log(j, 'C');
    }, j * 1000);
}
console.log('-----------');
