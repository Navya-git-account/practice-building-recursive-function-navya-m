function reverseString(inputstring){
    if (inputstring.length <= 1 ){

        return inputstring;
    }

    return inputstring.charAt(inputstring.length - 1) + reverseString(inputstring.slice(0, -1));

}
console.log(reverseString("hello"));
console.log(reverseString("recursion"));
console.log(reverseString("a"));
console.log(reverseString(""));