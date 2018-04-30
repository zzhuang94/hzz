var a = 100;
{
    let a = 99;
}
console.log(a);

{
    let j;
    for (j=0; j<10; j++) {
        let i = j; // 每个迭代重新绑定！
        console.log( i  );
    }
}
