var cat = require("cat-me");
    joke = require("knock-knock-jokes");
// ----- 1
function echo(str, num) {
    for(var i = 0; i < num; i++)
        console.log(str);
}

// ----- 2
function average(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum = sum + Number.parseInt(element);
    });
    var avg = sum / arr.length;
    
    return Math.round(avg);
}

// ----- 3 
function catMe() {
    return cat();
}

// ----- 4
function getJoke() {
    return joke();
}

function main() {
    console.log(getJoke());
}

main();