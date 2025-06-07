baseFare = 50;
chargePerKm = 15;

function calculateBodaFare(distanceInKm)
{
    additionalCharges = distanceInKm * chargePerKm;
    totalFare = baseFare + additionalCharges;
    console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${additionalCharges}
Total: KES ${totalFare}
    
Panda Pikipiki!`);   
}

let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?: ");
let distance = Number(input);

if (isNaN(distance) || distance <= 0) {
  console.log("Please enter a valid distance greater than 0.");
} else {
  calculateBodaFare(distance);
}