// Function to reverse a string using recursion
function reverseString(inputstring) {
    
    // Base case: if the string has 0 or 1 character, return it as-is
    if (inputstring.length <= 1) {
        return inputstring;
    }

    // Recursive case:
    // Take the last character and append the reversed result of the remaining string
    return inputstring.charAt(inputstring.length - 1) + reverseString(inputstring.slice(0, -1));
}

// example usecases

console.log(reverseString("hello"));       // Expected: "olleh"
console.log(reverseString("JavaScript"));  // Expected: "tpircSavaJ"
console.log(reverseString("a"));           // Expected: "a"
console.log(reverseString(""));            // Expected: ""
console.log(reverseString("12345"));       // Expected: "54321"
console.log(reverseString("racecar"));     // Expected: "racecar" (palindrome)
console.log(reverseString("!@#$$#@!"));    // Expected: "!@#$$#@!"
