document.getElementById('donate-btn')
    .addEventListener('click',function(e){
        e.preventDefault();

        const myBalance = getInputByText('my-total-amount');
        const decreaseMoney = getInputById('donate-amount-filed');

        if(isNaN(decreaseMoney)){
            alert('Failed to add money');
            return;
        }
        if(myBalance < decreaseMoney){
            alert('Not Have Enough Balance');
            return;
        }
        const newMyBalance = myBalance - decreaseMoney;
        document.getElementById('my-total-amount').innerText = newMyBalance;
    })

// ----------------------------------2-----------------------------------------
    document.getElementById('donate-btn-fani')
    .addEventListener('click',function(e){
        e.preventDefault();

        const myBalanceFani = getInputByText('my-total-amount');
        const decreaseMoneyFani = getInputById('donate-amount-filed-fani');

        if(isNaN(decreaseMoneyFani)){
            alert('Failed to add money');
            return;
        }
        if(decreaseMoneyFani >= myBalanceFani){
            alert('Not Have Enough Balance');
            return;
        }

        const newMyBalanceFani = myBalanceFani - decreaseMoneyFani;
        document.getElementById('my-total-amount').innerText = newMyBalanceFani;
    })

    // --------------------------------3----------------------------------------

    document.getElementById('quta-btn')
    .addEventListener('click',function(e){
        e.preventDefault();

        const myQuataBalance = getInputById('quta-amount-filed');
        const decreaseBalance = getInputByText('my-total-amount');
        

        if(isNaN(myQuataBalance)){
            alert('Failed to add money');
            return;
        }
        if(myQuataBalance >= decreaseBalance){
            alert('Not Have Enough Balance');
            return;
        }

        const myNewQuataAmount = decreaseBalance - myQuataBalance;
        document.getElementById('my-total-amount').innerText = myNewQuataAmount;
    })