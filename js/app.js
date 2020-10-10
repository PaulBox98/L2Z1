const _ = require('lodash');

function zad1(){
    console.log("Minimun:" + _.min(arguments));
    console.log("Maximum:" + _.max(arguments));
    return _.mean(arguments);
}

console.log(zad1(2,4,6));
