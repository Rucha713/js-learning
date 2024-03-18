

var result = function(word){
    var result = word.length%2==0 ? "EVEN":"ODD";
    console.log(`given word ${word} is with ${result} length`);
}
result("javascript");
result("I am hero");

var multiple = function(num) {
    var result= num%3==0 ? "Yes" : "No";
    console.log(`Given number ${num} is multiple of 3 ${result}`);
}
multiple(9)