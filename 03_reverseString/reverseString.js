const reverseString = function(words) {
    var reversedWord = ""
    for (let i = words.length-1; i > -1; i--) {
        reversedWord += words[i]
    }
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
