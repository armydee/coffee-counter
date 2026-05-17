let coffeeCount = 0;
let previousCount = "";
const coffeeCounter = document.getElementById("coffeeCount");
const previousCoffeeCount = document.getElementById("previousCoffeeCount");

// add event listeners to buttons
document.getElementById("incrementButton").addEventListener("click", drinkCoffee);
document.getElementById("decrementButton").addEventListener("click", cancelCoffee);
document.getElementById("saveCoffees").addEventListener("click", saveCoffees);

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
