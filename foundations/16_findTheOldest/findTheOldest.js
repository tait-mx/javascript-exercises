const findTheOldest = function(array) {
    array.forEach(a => {if(a.yearOfDeath == undefined) {
        a.yearOfDeath = new Date().getFullYear()
    }});
    let ages = array.map(a => 
        // 
         a.yearOfDeath - a.yearOfBirth);
        let oldest = ages.indexOf(Math.max(...ages));
    return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;


        // if(a.yearOfDeath == undefined) {a.yearOfDeath = new Date().getFullYear()} 
