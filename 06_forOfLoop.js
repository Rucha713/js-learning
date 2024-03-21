const arrayNumbers = [2, 4, 1, 7, 9, 8];

for (const element of arrayNumbers) {
    console.log(element);
}

let sum = 0;// 7
for (const element of arrayNumbers) {
    sum = sum + element;
}

console.log(`Sum of an array : ${sum}`);

let multiplication = 1;
for (const element of arrayNumbers) {
    multiplication = multiplication * element;
}
console.log(`multiplication of an array : ${multiplication}`);

console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);
    
}


console.log(friendList);
const elements = friendList.join(",");
console.log(elements);

console.log(friendList.join("="));


const myArray = [1, 2, 3, 4, 5];
const totalElements = myArray.length;
console.log(totalElements); // Output: 5

