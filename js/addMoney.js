document.getElementById('donate-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoney = getInputById('donate-amount-filed');
        const totalDonate = getInputByText('total-donate-amount');
        const mybalance = getInputByText('my-total-amount');
        const history1 = document.getElementById('history-container');
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
       
    // -----------------------------data-----------------
    const currentTime = new Date();
    const date = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getFullYear();
    // -------------time----------------
    const time = new Date().toLocaleTimeString();

    const formateDateTime = `
    Date: ${date}/${month}/${year} Time: ${time}
    `;
    history1.innerHTML += `
    <div class=" text-center border bg-green-200 p-3 rounded-2xl shadow-lg mb-2">
    <h3 class="text-center text-2xl font-bold">Successfully Donate for Money at Noakhali</h3>
      <p class=" text-center py-1"> Donate Amount:${addMoney} New Amount:${newDonateAmount}</p>
      <p>${formateDateTime}</p>
    </div>
    `;
})
// ------------------------------2----------------------------------------

document.getElementById('donate-btn-fani')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoneyFani = getInputById('donate-amount-filed-fani');
        const totalDonateFani = getInputByText('total-donate-fani');
        const history2 = document.getElementById('history-container');

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
      history2.innerHTML += `
      <div class=" text-center border bg-green-200 p-3 rounded-2xl shadow-lg mb-2">
      <h3 class="text-center text-2xl font-bold">Successfully Donate for Money at Feni</h3>
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
        const history3 = document.getElementById('history-container');

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

        // -----------------------------data-----------------
        const currentTime = new Date();
        const date = currentTime.getDate();
        const month = currentTime.getMonth() + 1;
        const year = currentTime.getFullYear();
        // -------------time----------------
        const time = new Date().toLocaleTimeString();

        const formateDateTime = `
        Date: ${date}/${month}/${year} Time: ${time}
        `;
        history3.innerHTML += `
        <div class=" text-center bg-green-200 p-3 rounded-2xl shadow-lg mb-2">
        <h3 class="text-center text-2xl font-bold">Successfully Donate for Money at Quata</h3>
        <p class=" text-center py-1"> Donate Amount: ${quataInput} New Amount: ${newQutaAmount}</p>
        <p>${formateDateTime}</p>
        </div>
        `;
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

const donateTap = document.getElementById('button-donate');
const historyTap = document.getElementById('button-history');
historyTap.addEventListener('click',function(){
    historyTap.classList.add('btn', 'btn-xs', 'sm:btn-sm', 'md:btn-md', 'lg:btn-lg', 'bg-orange-500');

    donateTap.classList.remove('bg-orange-500');
})
donateTap.addEventListener('click',function(){
    donateTap.classList.add('btn', 'btn-xs', 'sm:btn-sm', 'md:btn-md', 'lg:btn-lg', 'bg-orange-500');
    historyTap.classList.remove('bg-orange-500');
})

// ------------------
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "./blog.html";
})