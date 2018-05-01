var arr = ["kobe", 123, 'zzhuang', {kobe: 24}];

console.log(arr.length, 'length');
arr[1] = 100;
arr['1'] = 99;
arr[4] = 88;
console.log(arr.length, 'length');
arr[8] = 88;

console.log(arr);
console.log(arr.length, 'length');

arr.kobe = 'KOBE';
console.log(arr);
console.log(arr.length, 'length');

arr1 = arr;
arr1[1] = 666;
console.log(arr);

for (var k in arr) {
    console.log("key: " + k + ", value: " + arr[k]);
}
