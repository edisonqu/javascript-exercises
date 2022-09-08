const repeatString = function(word, num) {

    var finishedWord = ""
    for(let i =0; i < num;i++){
        finishedWord += word;
    }

    return num >= 0 ? finishedWord : "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
