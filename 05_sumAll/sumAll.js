const sumAll = function(startNum, endNum) {

    if(startNum < 0 || endNum < 0 || typeof(startNum) !== "number" ||typeof(endNum) !== "number"  ){
        return "ERROR"
    }
    else if(startNum === endNum){
        return endNum
    }
    else if(endNum < startNum){
        return startNum + (sumAll(startNum-1, endNum))
    }
    return startNum + (sumAll(startNum+1, endNum))

};

// Do not edit below this line
module.exports = sumAll;
