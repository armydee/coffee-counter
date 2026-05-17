let coffeeCount = 0;
let previousCount = "";
const coffeeCounter = document.getElementById("coffeeCount");
const previousCoffeeCount = document.getElementById("previousCoffeeCount");

function drinkCoffee() {
    coffeeCount++;
    coffeeCounter.textContent = coffeeCount;
}

function cancelCoffee() {
    if (coffeeCount > 0) {
        coffeeCount--;
        coffeeCounter.textContent = coffeeCount;
    }
}

function saveCoffees() {
    if (coffeeCount > 0) {
        previousCount += coffeeCount + " - ";
        previousCoffeeCount.textContent = previousCount;
        coffeeCount = 0;
        coffeeCounter.textContent = coffeeCount;
    }
}
