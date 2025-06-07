amountOfWater = 500;
amountOfMilk = 200;
tableSpoonLeaves = 1;
teaspoonSugar = 2;

function calculateChaiIngredients(numberOfCups)
{
    let totalWater = amountOfWater * numberOfCups;
    let totalMilk = amountOfMilk * numberOfCups;
    let totalLeaves = tableSpoonLeaves * numberOfCups;
    let totalSugar = teaspoonSugar * numberOfCups;

    console.log(`water: ${totalWater}
        milk: ${totalMilk}
        leaves: ${totalLeaves}
        sugar: ${totalSugar}`);
}
