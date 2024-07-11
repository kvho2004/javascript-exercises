const repeatString = function(str,num) {
    if (num < 0) return "ERROR";
    let product = "";
    for ( i = 0; i < num; i++ ) {
        product += str;
    }

    return product
};

// Do not edit below this line
module.exports = repeatString;
