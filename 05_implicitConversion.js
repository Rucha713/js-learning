// numeric string used with gives string type

let result;

result = '3' + 2;

console.log(result) // "32"

result = '3' + true;

console.log(result); // "3true"

result = '3' + undefined;

console.log(result); // "3undefined"

result = '3' + null;

console.log(result); // "3null"

console.log("===================boolean implicit conversion====================");

// if boolean is used, true is 1, false is 0

let result1;

result1 = '4' - true; console.log(result1); // 3

result1 = 4 + true; console.log(result1); // 5

result1 = 4 + false; console.log(result1); // 4

console.log("==================number string conversion=====================");
// numeric string used with ,, results number type

let result2;

result2 = '4' - '2'; console.log(result2); // 2

result2 = '4' - 2; console.log(result2); // 2

result2 = '4' * 2; console.log(result2); // 8

result2 = '4' / 2; console.log(result2); // 2