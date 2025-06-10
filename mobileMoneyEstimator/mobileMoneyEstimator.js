function estimateTransactionFee(amountToSend){
  // Calculates the transaction fee based on the amount to send
    transactionFee = (1.5 / 100) * amountToSend;
    if (transactionFee < 10) {
        transactionFee = 10;
        totalAmount = amountToSend + transactionFee;
    }
    else if (transactionFee > 70) {
        transactionFee = 70;
        totalAmount = amountToSend + transactionFee;
    }
    else {
        totalAmount = amountToSend + transactionFee;
    }

    // Outputs the transaction fee and total amount to be debited
    console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${transactionFee}
Total amount to be debited: KES ${totalAmount}

Send Money Securely!`)
}

// User input for the amount to send
let input = prompt("Unatuma Ngapi? (KES): ");
let amount = Number(input);

// Validates user input
if (isNaN(amount) || amount <= 0) {
  console.log("Please enter a valid amount greater than 0.");
} else {
  estimateTransactionFee(amount);
}