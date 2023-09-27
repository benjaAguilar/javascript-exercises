const reverseString = function(normalStr) {
    let strArray = normalStr.split("");

    let reverse = strArray.reverse();

    let reverseStr = reverse.join("");

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
