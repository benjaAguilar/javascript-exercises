const sumAll = function(firstNum, lastNum) {
    let sum = 0;

    if(firstNum > lastNum){
        let saveLastNum = lastNum;
        lastNum = firstNum;
        firstNum = saveLastNum;

    } else if(firstNum < 0 || lastNum < 0){
        return "ERROR"

    } else if(typeof firstNum != "number" || typeof lastNum != "number"){
        return "ERROR"

    }

    for(let i = firstNum; i <= lastNum; i++){
        sum += i; 
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
