// Rates
baseFare = 50;
chargePerKm = 15;

function calculateBodaFare(distanceInKm)
{
    // Calculates the total fare based on the distance
    additionalCharges = distanceInKm * chargePerKm;
    totalFare = baseFare + additionalCharges;

    // Outputs the total fare for the boda boda ride
    console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${additionalCharges}
Total: KES ${totalFare}
    
Panda Pikipiki!`);   
}

// User input for the distance in kilometers
let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?: ");
let distance = Number(input);

// Validates user input
if (isNaN(distance) || distance <= 0) {
  console.log("Please enter a valid distance greater than 0.");
} else {
  calculateBodaFare(distance);
}