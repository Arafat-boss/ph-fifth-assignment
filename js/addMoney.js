document.getElementById('donate-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoney = getInputById('donate-amount-filed');
        const totalDonate = getInputByText('total-donate-amount');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        const newDonateAmount = addMoney + totalDonate;
        document.getElementById('total-donate-amount').innerText = newDonateAmount;
})


document.getElementById('donate-btn-fani')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoneyFani = getInputById('donate-amount-filed-fani');
        const totalDonateFani = getInputByText('total-donate-fani');

        if(isNaN(addMoneyFani)){
            alert('Failed to add money');
            return;
        }
        const newDonateAmountFani = addMoneyFani + totalDonateFani;
        document.getElementById('total-donate-fani').innerText = newDonateAmountFani;
})