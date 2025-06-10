// Ingredients
let amountOfWater = 200;
let amountOfMilk = 50;
let tableSpoonLeaves = 1;
let teaspoonSugar = 2;

function calculateChaiIngredients(numberOfCups)
{
  // Multiplies ingedients by the number of cups entered by the user
    let totalWater = amountOfWater * numberOfCups;
    let totalMilk = amountOfMilk * numberOfCups;
    let totalLeaves = tableSpoonLeaves * numberOfCups;
    let totalSugar = teaspoonSugar * numberOfCups;

  // Outputs the total ingredients needed for the specified number of cups 
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
  - Water: ${totalWater} ml
  - Milk: ${totalMilk} ml
  - Tea Leaves (Majani): ${totalLeaves} tablespoons
  - Sugar (Sukari): ${totalSugar} teaspoons

Enjoy your Chai Bora!`);
}

// User input for the number of cups
let input = prompt("Karibu! How many cups of Chai Bora would you like to make? ");
let numberOfCups = Number(input);

// Validates user input
if (isNaN(numberOfCups) || numberOfCups <= 0) {
  console.log("Please enter a valid number greater than 0.");
} else {
  calculateChaiIngredients(numberOfCups);
}