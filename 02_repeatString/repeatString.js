const repeatString = function(word, number) {
    const string = word;
    const num = number;
    let newString = '';
    if (num>=0){
        for (i = 0; i<num; i++){
            newString += string;
        }
    } else {
        newString = "ERROR";
    }
    
    return newString;

};

// Do not edit below this line
module.exports = repeatString;
