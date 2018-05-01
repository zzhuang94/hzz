var obj1 = {
    a: 2
};
var obj2 = Object.create(obj1);
console.log(obj2.a);

obj2.b = 100;
console.log(obj1.b);
console.log(obj2.b);

console.log(Object.keys(obj1));
console.log(Object.keys(obj2));

obj1 = Object.create(obj2);
obj3 = Object.create(obj2);
console.log("------")
console.log(obj1.a);
console.log(obj1.b);
console.log(obj3.a);
console.log(obj3.b);
console.log("------");
console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
console.log(Object.keys(obj3));
console.log("------")
obj3.b = 99;
console.log(Object.keys(obj3));
console.log(obj1.b);
console.log(obj3.b);
