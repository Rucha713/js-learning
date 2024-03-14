var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);

console.log("========== concat() ==================");
var firstName = "Gajanan";
var lastName= " Kharat";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);

console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);


console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log("========== touppercase ===========");
var greet ="Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(" ${greet} in upper case is: ${toUpperCase}");

console.log("========== trim() ==================");
var str ="!   trim both side   !";
var greet="Good Morning "
console.log(` ${greet} it's length is : ${greet.length}`);
console.log(str.trim());

console.log("========== replace() ==================");
var stri ="my name is codingture.";
console.log(stri.includes('name'));

console.log("========== slice() ==================");
var str =" Devlopers world"
console.log(str.slice(0, 10));

console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);


console.log("========== trim() ==================");
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);


console.log(`========== includes() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`total words are: ${resultValue.length}`);

function totalWord(para1){
var result = para1.split(" ")
console.log(`Total words are: ${result.length}`);
}
totalWord("I am happy Buddy");
totalWord("i am leaning javascript the language of internet")

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);