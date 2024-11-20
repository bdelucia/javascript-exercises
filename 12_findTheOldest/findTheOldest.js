const findTheOldest = function(people) {
    people.sort(function(a,b) {
        const currentYear = 2024;

        const firstAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const secondAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;

        return secondAge - firstAge;
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
