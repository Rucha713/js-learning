

var word ="javaScript";
for (let index = 0; index < word.length; index++) {
    var element = word.charAt(index);
    console.log(element);
    
}

console.log(`WAP to count the char a`);
var word ="javaScript";
var count=0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index);
    if (char ==`a`) {
        count=count+1;

    }
}
console.log(`char a count is: ${count}`);