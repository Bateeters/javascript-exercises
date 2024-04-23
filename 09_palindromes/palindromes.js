const palindromes = function (input) {
    const string = input; // assigns input to string
    const reversed = string.split('').reverse().join(''); // splits "string" into an array, reverses it, and rejoins it to a string
    return string === reversed; // check to see if both strings are the same
};

// Do not edit below this line
module.exports = palindromes;
