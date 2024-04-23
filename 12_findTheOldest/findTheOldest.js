const findTheOldest = function(array) {
    let oldestPerson = array.reduce((oldest, currentPerson) => { // use .reduce() to compare each person
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); // use getAge() to get the initialValue for .reduce
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); // use getAge() to get the next person's age to compare
        return oldestAge < currentAge ? currentPerson : oldest; // compare the two values, the higher age is now set as "oldest" and the loop restarts
        // once all the objects have been compared, the oldest will be returned
    })
    
    return oldestPerson; // returns the result of the .reduce()
};

// new function to calculate age of each person
const getAge = function(birth, death){
    if(!death){ // if there is no year of death, use current year
        death = new Date().getFullYear();
    }
    return death - birth;
};

// return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });

// Do not edit below this line
module.exports = findTheOldest;
