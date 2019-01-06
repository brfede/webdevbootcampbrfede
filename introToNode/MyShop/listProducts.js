var faker = require("faker");

function fakeProds() {
    console.log("====================");
    console.log("WELCOME TO MY SHOP!");
    console.log("====================");
    for(var i = 0; i < 10; i++) {
        var prod = faker.commerce.productMaterial();
        var price = faker.commerce.price();
        console.log(prod + " - $" + price);
    }
}

fakeProds();