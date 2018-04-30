function createModule() {
    var name = 'zzhuang';
    function hello(msg = 'good morning!') {
        console.log("hello", name, msg);
    }
    function changeName(newName) {
        name = newName;
    }
    return {
        hello: hello,
        changeName: changeName
    };
}

m = createModule();
m1 = createModule();
m.changeName("kobe");

m.hello("you are handsome!");
m1.hello("you are handsome!");

m2 = createModule();
m2.hello();
