const findTheOldest = function(arrayOfObjects) {
const date = new Date();

let sortedArray = arrayOfObjects.sort((obj1,obj2)=>{
    let firstPerson = (obj1.yearOfDeath || date.getFullYear()) - obj1.yearOfBirth;
    let secondPerson = (obj2.yearOfDeath || date.getFullYear()) - obj2.yearOfBirth;
    return firstPerson > secondPerson ? -1 : 1;
});

return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
