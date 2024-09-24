document.getElementById('donate-btn')
    .addEventListener('click',function(e){
        e.preventDefault();

        const myBalance = getInputByText('my-total-amount');
        const decreaseMoney = getInputById('donate-amount-filed');

        if(isNaN(decreaseMoney)){
            alert('Failed to add money');
            return;
        }

        const newMyBalance = myBalance - decreaseMoney;
        document.getElementById('my-total-amount').innerText = newMyBalance;
    })


    document.getElementById('donate-btn-fani')
    .addEventListener('click',function(e){
        e.preventDefault();

        const myBalanceFani = getInputByText('my-total-amount');
        const decreaseMoneyFani = getInputById('donate-amount-filed-fani');

        if(isNaN(decreaseMoneyFani)){
            alert('Failed to add money');
            return;
        }
        if(decreaseMoneyFani > myBalanceFani){
            alert('Not Have Enough balance');
            return;
        }

        const newMyBalanceFani = myBalanceFani - decreaseMoneyFani;
        document.getElementById('my-total-amount').innerText = newMyBalanceFani;
    })