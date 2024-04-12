function sco() {
    
    
    
    if (true) {
        var x = 10;
        const y=20;
        let z=30;
        console.log(z);
    }
    console.log(x); // Output: 10
    console.log(y);
    
}
sco();
//    console.log(x);
//     console.log(z);
   console.log(x); // Error: x is not defined


// if (true) {
//     var x=10;
//     let y = 20;
//     const z = 30;
//     console.log(y); // Output: 20
//     console.log(z); // Output: 30
//     console.log(x); // Output: 10
// }
// console.log(x);  //Output: 10
// console.log(y); // Error: y is not defined
// console.log(z); // Error: z is not defined


// var is function-scoped and allows re-declaration and reassignment, 
// let and const are block-scoped, and const additionally prohibits reassignment after declaration.