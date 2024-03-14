function stringHandsOn() {
    var str = " Hey you are doing good, keep it up ";
    console.log("===========Step1==========");
    // 1. Print the string as it is
    console.log(`Original string: "${str}"`);

    console.log("===========Step2==========");
    // 2. Calculate length of the String
    var length = str.length;
    console.log(`Length of string is: ${length}`);

    console.log("===========Step3==========");
    // 3. Remove leading and trailing extra spaces and log string with its length
    var trimmedStr = str.trim();
    console.log(`Trimmed string: "${trimmedStr}"`);
    console.log(`Length of trimmed string is: ${trimmedStr.length}`);

    console.log("===========Step4==========");
    // 4. Print the total number of extra spaces removed
    var extraSpacesRemoved = str.length - trimmedStr.length;
    console.log(`Total number of extra spaces removed: ${extraSpacesRemoved}`);

    console.log("===========Step5==========");
    // 5. Print the first and last character after trimming
    console.log(`First character after trimming: ${trimmedStr[0]}`);
    console.log(`Last character after trimming: ${trimmedStr[trimmedStr.length - 1]}`);

    console.log("===========Step6==========");
    // 6. Print the count of total words available in the string after trimming
    var words = trimmedStr.split(" ");
    var wordCount = words.length;
    console.log(`Total number of words in trimmed string: ${wordCount}`);

    console.log("===========Step7==========");
    // 7. Print the index of word "good"
    var indexOfGood = trimmedStr.indexOf("good");
    console.log(`Index of the word "good" in trimmed string: ${indexOfGood}`);

    console.log("===========Step8==========");
    // 8. Print the substring starting from index 22
    var substringFromIndex22 = trimmedStr.substring(22);
    console.log(`Substring starting from index 22: "${substringFromIndex22}"`);

    console.log("===========Step9==========");
    // 9. Check if string ends with "up" after trimming
    var endsWithUp = trimmedStr.endsWith("up");
    console.log(`Does the string end with "up" after trimming? ${endsWithUp}`);

    console.log("===========Step10==========");
    // 10. Check if string starts with "Hey" after trimming
    var startsWithHey = trimmedStr.startsWith("Hey");
    console.log(`Does the string start with "Hey" after trimming? ${startsWithHey}`);
}

// Invoke the function
stringHandsOn();
