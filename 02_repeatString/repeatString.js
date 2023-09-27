const repeatString = function(str, numberOfTimes) {
    let stringContainer = "";

    if(numberOfTimes < 0){
        return "ERROR"
    }

    for(let i = 1; i <= numberOfTimes; i++){
            stringContainer += str;
    }

    return stringContainer
};

// Do not edit below this line
module.exports = repeatString;
