document.getElementById('donate-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoney = getInputById('donate-amount-filed');
        const totalDonate = getInputByText('total-donate-amount');
        const mybalance = getInputByText('my-total-amount');
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        if(addMoney > mybalance){
            alert('Not Have Enough Balance');
            return;
        }
        const newDonateAmount = addMoney + totalDonate;
        document.getElementById('total-donate-amount').innerText = newDonateAmount;
       
        const p = document.createElement('p');
        p.innerText = `Added :${addMoney} New Balance : ${newDonateAmount}`;
        document.getElementById('history-container').appendChild(p);
})
// ------------------------------2----------------------------------------

document.getElementById('donate-btn-fani')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoneyFani = getInputById('donate-amount-filed-fani');
        const totalDonateFani = getInputByText('total-donate-fani');

        if(isNaN(addMoneyFani)){
            alert('Failed to add money');
            return;
        }
        if(addMoneyFani >= totalDonateFani){
            alert('Not Have Enough Balance');
            return;
        }
        const newDonateAmountFani = addMoneyFani + totalDonateFani;
        document.getElementById('total-donate-fani').innerText = newDonateAmountFani;

        const div = document.createElement('div');
        div.classList.add('bg-green-200')
        div.innerHTML = `
            <h3 class="text-center text-2xl font-bold">Successfully Added a Money</h3>
            <p class="text-center">Donate This Money:${addMoneyFani} New Balance: ${newDonateAmountFani}</p>
        `
        document.getElementById('history-container').appendChild(div);
        // const p = document.createElement('p');
        // p.innerText = `Added :${addMoneyFani} New Balance : ${newDonateAmountFani}`;
        // document.getElementById('history-container').appendChild(p);
})

// -----------------------------------------3----------------------------------------

document.getElementById('quta-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const quataInput = getInputById('quta-amount-filed');
        const quataAmount = getInputByText('total-quata-amount');

        if(isNaN(quataInput)){
            alert('Failed to add money');
            return;
        }
        if(quataInput >= quataAmount){
            alert('Not Have Enough Balance');
            return;
        }
        const newQutaAmount = quataInput + quataAmount;
        document.getElementById('total-quata-amount').innerText = newQutaAmount;
})
// ---------------------------------------------------------------------

document.getElementById('button-donate')
    .addEventListener('click', function(){
        document.getElementById('donate-section').classList.remove('hidden');
        document.getElementById('history-section').classList.add('hidden');
})
document.getElementById('button-history')
    .addEventListener('click', function(){
        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('donate-section').classList.add('hidden');
})

// ------------------
