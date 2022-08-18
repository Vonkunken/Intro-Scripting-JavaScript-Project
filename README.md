# Intro-Scripting-JavaScript-Project

This reposity exists as a backup off my JavaScript project, and as a place to write and store the technical documentation for it, which will follow in this file.

## Purpose of the Application
This application is intended to fulfil Requirement 2 of the JavaScript project for the Introductory Scripting Class
At its most basic level it takes an input from the user, the total number of pizzas to purchase and returns the lowest possible cost of the pizzas based on the sales price for purchasing multiple pizzas.

## How it Works
There is internal documentation within the source code in the form of comments but I will also explain here what the code is doing.

Line 4 wraps everything in a function for order_form.html to call.

The first block (Starting line 5) inititalises several variables that will be used throughout.

The second block (Starting line 11) checks the users input to see if it is a positive number as the rest of the code relies on it being a number, it returns an warning and leaves the function if it is not a valid positive number.

The next line of code on line 16 rounds the number down as you can't order only half or 0.2 or any other decimal of a pizza.

The third block of code (Starting line 18) runs one final check to make sure the number is greater than zero as you cannot order a negative number of pizzas or zero pizzas.

The forth block of code (Starting line 23) checks if there are at least 3 pizzas being ordered, as 3 pizzas is the best deal possible per pizza, if there are 3 or more it works out how many times to order 3 pizzas, stores that, and removes that many pizzas so we are left with how many pizzas are left to be ordered.

The fifth block of code (Starting line 28) functions similarly to the 4th, checking if at least 2 pizzas remain to be ordered, as 2 pizzas is while not as good a deal per pizza as 3 pizzas, it is still a better deal than ordered those 2 pizzas individually, then stores if that should be ordered and removes that many pizzas so we are left with how many pizzas are left to be ordered.

The sixth block of code (Starting line 33) once again is similar, checking if a single pizzas is left to be ordered, if it is, it then stores that.

The next line of code on line 37 recalculates the total number of pizzas being ordered by multiplaying how many lots of 2 are to be ordered by 2 and lots of 3 pizzas are to be ordered by 3 and adding those back to the total to display later

The next line of code on line 39 calculates the total price, it takes how many lots of 3 pizzas, 2 pizzas, and 1 pizza we want to order, then multiplies those by their prices adding those together to arrive at a total price.

The next line of code on line 41 produces an alert to be displayed saying the total cost with some formatting to display it as a currency instead of a just a number additionally it says how many pizzas are to be ordered so the who initially entered the number to be ordered knows they entered the correct number.
