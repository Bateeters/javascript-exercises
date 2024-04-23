const getTheTitles = function(array) {

    // use .map() to go through the given array
    // "obj" is used to name each object in the array. 
    // obj.title refers to the object's title since "title" was a predefined object key
    let titles = array.map((obj)=> obj.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
