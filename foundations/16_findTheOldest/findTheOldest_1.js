
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

const findTheOldest = function(people) {
let carlysAge = people[0].yearOfDeath - people[0].yearOfBirth;
let raysAge = people[1].yearOfDeath - people[1].yearOfBirth;
let janesAge = people[2].yearOfDeath - people[2].yearOfBirth;

let ages = [carlysAge, raysAge, janesAge];
    console.log("carlysAge = " + carlysAge + ", raysAge = " + raysAge + ", janesAge = " + janesAge);

let sortedAges = [...ages];
sortedAges.sort();
    console.log("sortedAges = " + sortedAges)
    console.log("sortedAges[2] = " + sortedAges[2]);

let oldestIndex = ages.indexOf(sortedAges[2]);
    console.log("oldestIndex = " + oldestIndex);

    return people[oldestIndex];
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
