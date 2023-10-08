const fibonacci = function(fn) {
    let fibonacciNumbers = [0, 1, 1, 2];

    for(let i = 0; i <= fn; i++){
        if(i <= 3){
            continue;

        }
        let index1 = i - 1;
        let index2 = i - 2;

        let number = fibonacciNumbers[index1] + fibonacciNumbers[index2];

        fibonacciNumbers.push(number);
    }
    return (fibonacciNumbers[fn] === undefined) ? "OOPS": fibonacciNumbers[fn];
};

// Do not edit below this line
module.exports = fibonacci;
