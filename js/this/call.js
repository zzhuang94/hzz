function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "hello, I'm " + identify.call(this);
    console.log(greeting);
}
var me = {name: "zzhuang"};
var you = {name: "kobe"};

console.log(identify.call(me));
console.log(identify.call(you));

speak.call(me);
speak.call(you);
