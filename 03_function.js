//Function with no arguments and no return value
function show(){
    console.log("Inside show function");
}
show();

//Function with arguments and no return value

function add(n1,n2,n3){
    console.log("arguments: ",n1,n2,n3);
    var result = n1+n2+n3;
    console.log("Addition is: ", result);
}
add(3,6,7);
add(99.89, 67, 456789);
add(6,7);
add(16, 9, 90, 44);
add("Hi", "Good", "Morning");

//  Function with argument and return value

function subtract(numOne, numTwo){
    console.log("=========Subtraction============");
    console.log("Arguments: ",numOne , numTwo);
    var result = numOne-numTwo;
    return result;
}
var returnvalue =subtract(9,4);
console.log("subtraction is: ",returnvalue);

var returnvalue =subtract(99, 42);
console.log("subtraction is: ",returnvalue);