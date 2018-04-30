(function foo() {
    var a = 4;
    function baz() {
        console.log(a);
    }
    bar(baz);
})();
function bar(fn) {
    fn();
}
