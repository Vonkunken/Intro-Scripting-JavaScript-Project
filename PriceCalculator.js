// This fuction will return 1 of 2 possible results, either a warning message that the number of pizzas is invalid
// or one saying how many pizzas was meant to be ordered and the cost
// Users of the program only need enter a integer number of pizzas in the box on the form
function checkQuantity(numberOfPizzas) { // Everything is wrapped in a function for the order form to call
    var numberOf3X = 0
    var numberOf2X = 0
    var numberOf1X = 0
    var totalPrice
    // Initialises the required variables



if (isNaN(numberOfPizzas) == true) { // Checks if the value entered is a number, if it is not, it throws an warning and leaves the function
    alert("You entered invalid characters, please only enter integer numbers")
    return
}

numberOfPizzas = Math.floor(numberOfPizzas) // Rounds down the nubmer of pizzas to make sure its an integer value and functions correctly through the rest of the program

if (numberOfPizzas <= 0) { // Checks if the number entered is greater than zero, and returns to the form if it is invalid
    alert("The number you entered is invalid, you cannot order zero or a negative number of pizzas")
    return
}

if (numberOfPizzas >= 3) { // Checks if it is divisiable by 3 first as that is the best deal, then stores how many times it is and passes the remained on to the next test
    numberOf3X = Math.floor(numberOfPizzas / 3)
    numberOfPizzas -= (numberOf3X * 3) // This is admitently a strange way to get a remainder but calculates it and passes it on in one go
}

if (numberOfPizzas >= 2) { // Checks if it is divisiable by 2 second as that is the second best deal, then stores how many times it is and passes the remained on to the next test
    numberOf2X = Math.floor(numberOfPizzas / 2)
    numberOfPizzas -= (numberOf2X * 2)
}

if (numberOfPizzas >= 1) { // Checks if it is divisible by 1 and stores if it is or is not, as you should only ever be buying pizzas at their individual price
    numberOf1X = 1 // This just sets the value to 1 as this code should only ever run if there is only a single pizza left to purchase.
}

numberOfPizzas += (numberOf2X * 2) + (numberOf3X * 3) // numberOfPizzas is reset to its initial value for the alert box

totalPrice = (numberOf3X * 14.00) + (numberOf2X * 12.00)  + (numberOf1X * 6.45) // Calculates the cost of the pizzas

alert(`It will cost $${totalPrice.toFixed(2)} to order ${numberOfPizzas} pizzas`)
}

// Version 1.1
// Brandon