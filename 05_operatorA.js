// 1. Function to calculate the square of the length of a word
function squareOfWordLength(word) {
    var length = word.length;
    var square = length * length;
    return square;
}

// Invoke or call the function for values one by one
console.log(`Square of length of "JavaScript": ${squareOfWordLength("JavaScript")}`);
console.log(`Square of length of "Google Chrome": ${squareOfWordLength("Google Chrome")}`);
console.log(`Square of length of "Developer Smart": ${squareOfWordLength("Developer Smart")}`);

// 2. Function to perform calculations on the given string
function calculateStringLengthAndWords() {
    var str = "I am Angular Developer";
    var words = str.split(" ");
    var wordCount = words.length;
    var totalLength = str.length;

    // 2.1. Find the average string length per word and log the result
    var averageLength = totalLength / wordCount;
    console.log(`Average length per word in "${str}" is: ${averageLength}`);

    // 2.2. Find the total string length multiplied by the number of words and log the result
    var multipliedLength = totalLength * wordCount;
    console.log(`Total string length multiplied by the number of words in "${str}" is: ${multipliedLength}`);
}

// Call the function to perform calculations on the given string
calculateStringLengthAndWords();
