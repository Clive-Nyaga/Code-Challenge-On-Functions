function estimateTransactionFee(amountToSend){
    transactionFee = (1.5 / 100) * amountToSend;
    if (transactionFee < 10) {
        transactionFee = 10;
        totalAmount = amountToSend + transactionFee;
        console.log(totalAmount)
    }
    else if (transactionFee > 70) {
        transactionFee = 70;
        totalAmount = amountToSend + transactionFee;
        console.log(totalAmount)
    }
    else {
        totalAmount = amountToSend + transactionFee;
        console.log(totalAmount)
    }
}
