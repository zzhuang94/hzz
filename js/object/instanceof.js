var str = "zzhuang";
console.log(typeof str);
console.log(str instanceof String);

var strObj = new String("zzhuang");
console.log(typeof strObj);
console.log(strObj instanceof String);

console.log(str.length);
console.log(strObj.length);

str = 'kobe';
console.log(str.length);
console.log(str.charAt(2));

console.log(Object.prototype.toString.call(strObj));
console.log(strObj);
