var a=5;
console.log(a);
var b=a++;
console.log(a);
console.log(b);


console.log("==========prefix=========");
var n1=5
var res = n1++ + ++n1 + n1++;
console.log(res);


console.log("===========postfix===========");
var a =2;
var b= ++a + ++a + a++ - --a;
console.log(b);


console.log("=========last=========");
var a= 4;
var b = a-- + ++a + ++a + a++;
console.log(b);

console.log("=========Even/Odd=========");
