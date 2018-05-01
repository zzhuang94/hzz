var obj = {
    a: 'kobe',
    45: 67
};
obj['kobe-bryant'] = 'hahah';
console.log(obj.a);
console.log(obj['kobe-bryant']);
console.log(obj[45]);
console.log(obj['45']);

var a = 12 + 33;
console.log(obj[a]);

console.log(obj);

o1 = {1:1};
o2 = {1:2};
obj[o1] = 'OOOO1';
console.log(obj[o2]);
console.log("------------");
console.log(obj);

var obj1 = {
    ['kobe' + 'bryant']: 999
};
obj1[123+345] = 100;
console.log(obj1);
