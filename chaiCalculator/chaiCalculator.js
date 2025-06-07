let amountOfWater = 200;
let amountOfMilk = 50;
let tableSpoonLeaves = 1;
let teaspoonSugar = 2;

function calculateChaiIngredients(numberOfCups)
{
    let totalWater = amountOfWater * numberOfCups;
    let totalMilk = amountOfMilk * numberOfCups;
    let totalLeaves = tableSpoonLeaves * numberOfCups;
    let totalSugar = teaspoonSugar * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
  - Water: ${totalWater} ml
  - Milk: ${totalMilk} ml
  - Tea Leaves (Majani): ${totalLeaves} tablespoons
  - Sugar (Sukari): ${totalSugar} teaspoons

Enjoy your Chai Bora!`);
}

let input = prompt("Karibu! How many cups of Chai Bora would you like to make? ");
let numberOfCups = Number(input);

if (isNaN(numberOfCups) || numberOfCups <= 0) {
  console.log("Please enter a valid number greater than 0.");
} else {
  calculateChaiIngredients(numberOfCups);
}