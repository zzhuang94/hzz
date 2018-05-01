var Sth = {
    cool: function() {
        this.greeting = "Hello world";
        this.count = this.count ? this.count + 1 : 1;
    }
}
Sth.cool();
console.log(Sth.greeting);
Sth.cool();
console.log(Sth.count);

var Another = {
    cool: function() {
        Sth.cool.call(this);
    }
}
Another.cool();
console.log(Another.greeting);
console.log(Another.count);
