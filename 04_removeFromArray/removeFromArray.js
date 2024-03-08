const removeFromArray = function(myArray, ...theArg) {

    const newArray = [];

    // Iterate through the given array, 
    // element holds the value of the current array item
    myArray.forEach((element) => {

        // If "theArg" rest param does not have the current element,
        if (!theArg.includes(element)){

            // Add the current element to newArray
            newArray.push(element);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
