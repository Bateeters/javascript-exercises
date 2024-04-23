const palindromes = function (input) {
    const string = input;
    const reversed = string.split('').reverse().join('');
    console.log(string, reversed);
    return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
