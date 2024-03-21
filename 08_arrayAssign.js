const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("==================Step 1===================");
// 1. Log the first and last element on console
console.log("First element:", fruits_seasonal[0]);
console.log("Last element:", fruits_seasonal[fruits_seasonal.length - 1]);


console.log("==================Step 2===================");
// 2. Add element → Papaya before the element 'Banana' and then log array on console
fruits_seasonal.unshift("Papaya");
console.log("Array after adding Papaya:", fruits_seasonal);


console.log("==================Step 3===================");
// 3. Remove 'Mango' from the array
const deleteElements = fruits_seasonal.splice(4, 1);
console.log(deleteElements);
console.log(fruits_seasonal);


console.log("==================Step 4===================");
// 4. Add element or insert an element 'Pineapple' at the last position
fruits_seasonal.push("Pineapple");
console.log("Array after adding Pineapple:", fruits_seasonal);


console.log("==================Step 5===================");
// 5. Insert an element - 'Dragon Fruit' before "Water Melon"
fruits_seasonal.splice(fruits_seasonal.indexOf("Water Melon"), 0, "Dragon Fruit");
fruits_seasonal.splice(1, 0, "Dragon Fruit")
console.log("Array after inserting Dragon Fruit:", fruits_seasonal);


console.log("==================Step 6===================");
// 6. Replace an element 'Orange' with 'Kiwi'
const deleteElement = fruits_seasonal.splice(3, 1, "Kiwi");
console.log("Array after replacing Orange with Kiwi:", fruits_seasonal);


console.log("==================Step 7===================");
// 7. Log the elements starting from index 1 to 4
console.log("Elements from index 1 to 4:", fruits_seasonal.slice(1, 5));


console.log("==================Step 8===================");
// 8. Only select last 3 element and log on console: Use the length property
console.log("Last 3 elements:", fruits_seasonal.slice(-3));
