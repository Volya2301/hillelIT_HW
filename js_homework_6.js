let services = {
    "Haircut": "60 euro",
    "Shaving": "80 euro",
    "Hair Therapy": "125 euro",

    price: function() {
        let totalPrice = 0;
        for (let element in this) {
            if (typeof this[element] === "string") {
                let values = this[element].split(" ");
                let numbValue = Number(values[0]);
                totalPrice += numbValue;
            }
        }
        return totalPrice;
    },
    minPrice: function(){
        let minValue = []
        for(let element in this) {
            if(typeof this[element] === "string") {
                let values = this[element].split(" ");
                let numbValue = Number(values[0]);
                minValue.push(numbValue)
            }
        }
        return Math.min(...minValue)
    },
    maxPrice: function(){
        let maxValue = []
        for(let element in this) {
            if (typeof this[element] === "string") {
                let values = this[element].split(" ");
                let numbValues = Number(values[0]);
                maxValue.push(numbValues);
            }
        }
        return Math.max(...maxValue)
    }
};

// services["Coloring"] = "2945 Euro"
// services["Keratin Treatment"] = "137"

console.log(`Total cost of services: ${services.price()} Euro.`);
console.log(`Minimum cost of services: ${services.minPrice()} Euro.`);
console.log(`Maximum cost of services: ${services.maxPrice()} Euro.`);