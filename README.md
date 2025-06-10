Challenge 1: Chai Bora Ingredient Calculator

A simple JavaScript script that calculates the ingredients required to make Kenyan Chai (tea) based on the number of cups entered by the user. This program serves as a fun way to practice functions, user input handling, and conditional logic in JavaScript.

---

## Description

The script prompts the user to enter the number of cups of tea they wish to prepare. Based on this input, the function calculates and displays the total quantities of the following ingredients required:

- Water (200 ml per cup)
- Milk (50 ml per cup)
- Tea Leaves (1 tablespoon per cup)
- Sugar (2 teaspoons per cup)

If the user provides an invalid number (non-numeric or less than or equal to zero), the program alerts the user to enter a valid value.

---

## How to Run

1. Open any modern web browser.
2. Open the Developer Console (`F12` or `Ctrl + Shift + I`).
3. Copy and paste the entire JavaScript code into the Console tab.
4. Press Enter.
5. When prompted, enter the number of cups of Chai Bora you'd like to make.
6. The total amounts of each ingredient will be displayed in the console.

---

## Files Included

chaiBoraCalculator.js

---

## Key Concepts Practiced

- Functions in JavaScript
- User Input via `prompt()`
- Type Conversion (`Number()`)
- Input Validation (`isNaN()`)
- Conditional Statements (if-else)

---

## Sample Output

Karibu! How many cups of Chai Bora would you like to make? 3

To make 3 cups of Kenyan Chai, you will need:

Water: 600 ml

Milk: 150 ml

Tea Leaves (Majani): 3 tablespoons

Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!

---

On invalid input:

Karibu! How many cups of Chai Bora would you like to make? -1

Please enter a valid number greater than 0.

---

## Future Enhancements

- Customize ingredient amounts based on personal preferences.
- Support for different types of tea recipes.
- Integration with a graphical user interface (GUI).

---

Challenge 2: Boda Boda Ride Fare Estimator

A simple and interactive JavaScript program that calculates the total fare for a Boda Boda ride based on the distance (in kilometers) provided by the user. This is a great practice project to strengthen one's understanding of functions, conditional logic, and user input handling in JavaScript.

---

## Description

This script simulates the fare calculation of a Boda Boda (motorbike taxi) service. The user is asked to enter the travel distance in kilometers. The total fare is calculated based on:

- Base Fare: KES 50
- Charge Per Kilometer: KES 15

If the user provides an invalid input (non-numeric or less than or equal to zero), they are prompted to enter a valid distance.

---

## How to Run

1. Open your browser's Developer Console (`F12` or `Ctrl + Shift + I`).
2. Go to the Console tab.
3. Copy and paste the entire JavaScript code.
4. Press Enter.
5. When prompted, enter the distance you wish to travel.
6. The calculated fare will be displayed in the console.

---

## Files Included

-bodaFareCalculator.js

---

## Concepts Practiced

- Functions in JavaScript
- User Input via `prompt()`
- Type Conversion (`Number()`)
- Input Validation (`isNaN()`)
- Conditional Statements

---

## Sample Output

Unafika wapi Mkubwa? Kilometer ngapi?: 5

Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!

---

On invalid input:

Unafika wapi Mkubwa? Kilometer ngapi?: -3

Please enter a valid distance greater than 0.

---

## Possible Future Features

- Add location-based fare calculation.
- Introduce surge pricing for peak hours.
- Graphical User Interface (GUI) integration.

---

Challenge 3: Simplified Mobile Money Transaction Fee Estimator 
This project contains a simple JavaScript script that estimates the transaction fee for sending money based on user input. The fee calculation adheres to predefined business rules and ensures the user understands the total amount to be debited for the transaction.

---

## Description

The script prompts the user to enter the amount of money they wish to send (in Kenyan Shillings - KES). Based on this input, the function:

1. Calculates the transaction fee as **1.5%** of the amount to be sent.
2. Ensures the fee is subject to the following limits:
   - Minimum fee: KES 10
   - Maximum fee: KES 70
3. Displays both:
   - The calculated transaction fee.
   - The total amount (original amount + fee) to be debited from the sender.

If the user provides invalid input (e.g., a non-number or a value less than or equal to 0), an error message is displayed.

---

## How to Run

1. Open any modern web browser.
2. Open Developer Tools (`F12` or `Ctrl + Shift + I`).
3. Copy and paste the entire JavaScript code into the Console tab.
4. Press Enter.
5. When prompted, input the amount you wish to send.
6. View the calculated transaction fee and total debit in the console output.

---

## Files Included

transactionFeeEstimator.js

---

## Key Concepts Practiced

- JavaScript Functions
- Mathematical Calculations
- User Input via `prompt()`
- Conditional Logic (if-else statements)
- Input Validation (`isNaN()`, value checks)

---

## Sample Output

Unatuma Ngapi? (KES): 500

Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!

---

On invalid input:

Unatuma Ngapi? (KES): -200

Please enter a valid amount greater than 0.

---

## Contributions

Feel free to fork this repository and suggest improvements, such as:
- Enhancing with a web-based UI.
- Currency conversion.
- Integration with real transaction APIs.

---

## © 2025 Clive Nyaga Kagotho. All rights reserved.





