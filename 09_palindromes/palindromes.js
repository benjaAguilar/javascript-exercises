const palindromes = function (string) {
    let str = string.toLowerCase();

    if(str.includes(", ")){
        str = str.split(',').join('');
        str = str.split(' ').join('');

    } else{
        str = str.split(' ').join('');

    }
    
    let arr = str.split('');

    if(str.includes("!") || str.includes(".")){
        arr.pop();
    }
    
    let reversed = arr.slice().reverse().join('');
    console.log(reversed);
    console.log(arr.join(''));

    return (reversed === arr.join('')) ? true: false;

};

// Do not edit below this line
module.exports = palindromes;
