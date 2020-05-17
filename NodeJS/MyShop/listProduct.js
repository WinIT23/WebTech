var faker = require('faker');
faker.locale = "en_US";

function fakeIt() {
    var str = "";
    str += faker.commerce.productName() + " - $" + faker.commerce.price();
    return str;
}

function line() {
    console.log("===============================");
}

function main() {
    var n = 10;

    line();
    console.log("WELCOME TO MY SHOP");
    line();

    var n = 10;
    while(n-- != 0) {
        console.log(fakeIt());
    }
}

main();