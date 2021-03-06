// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const NewDepositAmountText = depositInput.value;
    const NewDepositAmount = parseFloat(NewDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + NewDepositAmount;
    depositTotal.innerText = newDepositTotal;


    //update account balance: 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + NewDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';


});


// handle withdraw handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;


    // update valance: 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


    // clear withdraw input 
    withdrawInput.value = '';

})