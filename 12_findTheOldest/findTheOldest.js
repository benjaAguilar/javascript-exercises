const findTheOldest = function(people) {
    let persons = people.sort((a, b) => {
        let person1;
        let person2;
        let currentYear = (new Date()).getFullYear();

        if(a.yearOfDeath === undefined){
            person1 = currentYear - a.yearOfBirth
            person2 = b.yearOfDeath - b.yearOfBirth;

        } else if(b.yearOfDeath === undefined){
            person1 = a.yearOfDeath - a.yearOfBirth
            person2 = currentYear - b.yearOfBirth;

        } else{
            person1 = a.yearOfDeath - a.yearOfBirth;
            person2 = b.yearOfDeath - b.yearOfBirth;
        }
        
        return (person1 > person2) ? -1: 1;

    });
    return persons[0]
};

// Do not edit below this line
module.exports = findTheOldest;
