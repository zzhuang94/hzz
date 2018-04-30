var obj = {
    id: "aweson",
    count : 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout(() => {
                this.count ++;
                console.log("aaaa");
            }, 1000);
        }
    }
}

var id = "zzhuang";
obj.cool();
obj.cool();
obj.cool();
