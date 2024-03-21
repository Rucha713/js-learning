function foo() {
    var x = 10;
    console.log(x); // Output: 10
}
foo();
console.log(x); // Error: x is not defined


if (true) {
    let y = 20;
    const z = 30;
    console.log(y); // Output: 20
    console.log(z); // Output: 30
}
console.log(y); // Error: y is not defined
console.log(z); // Error: z is not defined

// To summarize, var is function-scoped and allows redeclaration and reassignment, 
// let and const are block-scoped, and const additionally prohibits reassignment after declaration.