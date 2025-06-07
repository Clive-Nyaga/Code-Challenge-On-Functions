baseFare = 50;
chargePerKm = 15;

function calculateBodaFare(distanceInKm)
{
    totalFare = baseFare + (distanceInKm * chargePerKm);
    console.log(totalFare);   
}
