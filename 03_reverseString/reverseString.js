const reverseString = function(string) {
    const word = string;
    let reversedWord = '';
    
    let wordArray = word.split('');

    for (i = 0; i<word.length; i++){
        lastLetter = wordArray.pop();
        reversedWord += lastLetter;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
