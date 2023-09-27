const removeFromArray = function(numArray, ...restElements){

    for(let i = 0; i <= numArray.length - 1; i++){

        for(let element of restElements){

            if(numArray[i] === element){
                numArray.splice(i, 1);
                i = 0;
                
            }
        
        }
    }

    return numArray

};

// Do not edit below this line
module.exports = removeFromArray;
