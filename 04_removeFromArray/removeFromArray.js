
const removeFromArray = function(arrays, ...args) {

    args.forEach(num => {
        while (arrays.includes(num)) {
            var indexOf = arrays.indexOf(num)
            arrays.splice(indexOf, 1)
        }
    })
    return arrays
};

// Do not edit below this line
module.exports = removeFromArray;
