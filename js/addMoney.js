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
        const history = document.getElementById('history-container');

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
    // -----------------------------data-----------------
      const currentTime = new Date();
      const date = currentTime.getDate();
      const month = currentTime.getMonth() + 1;
      const year = currentTime.getFullYear();
    //  -------------time----------------
      const time = new Date().toLocaleTimeString();

      const formateDateTime = `
      Date: ${date}/${month}/${year} Time: ${time}
      `;
      history.innerHTML += `
      <div class=" text-center border bg-green-200 p-3 rounded-2xl shadow-lg mb-2">
      <h3 class="text-center text-2xl font-bold">Successfully Added a Money</h3>
        <p class=" text-center py-1"> Donate Amount:${addMoneyFani} New Amount:${newDonateAmountFani}</p>
        <p>${formateDateTime}</p>
      </div>
      `;
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
