
function removeFromArray(...msg) {
    let array = msg.at(0);
    let size = msg.length;
    let index;

    for (let i = 1; i < size; i++) {
        while (array.includes(msg.at(i))) {
        index = array.indexOf(msg.at(i));
        array.splice(index, 1);
}
    }

    return (array)
}




console.log(removeFromArray([1, 4, 4, 2, 3], 3, 4, 0))



// Do not edit below this line
module.exports = removeFromArray;
