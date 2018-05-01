var obj = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_ = val;
    }
};

console.log(obj.a);
obj.a = 100;
console.log(obj.a);
