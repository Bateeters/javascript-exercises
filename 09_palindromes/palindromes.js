const palindromes = function (input) {
    const string = input; // assigns input to string
    const accepted = 'abcdefghijklmnopqrstuvwxyz0123456789'; // accepted characters

    // filter out any characters not in "accepted"
    const filteredString = string
        .toLowerCase() // turn entire string to lower case
        .split('') // turn string into array to use .filter()
        .filter((char) => accepted.includes(char)) // removes anything not in "accepted"
        .join(''); // join array back to a string

    // splits "filteredString" into an array, reverses it, and rejoins it to a string
    const reversed = filteredString
        .split('')
        .reverse() // .reverse() only works with arrays which is why we need to .split('') and .join('') before and after
        .join('');

    return filteredString === reversed; // check to see if both strings are the same
};

// Do not edit below this line
module.exports = palindromes;
