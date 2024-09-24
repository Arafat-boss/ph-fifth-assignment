document.getElementById('donate-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const addMoney = getInputById('donate-amount-filed');
        console.log(addMoney);
})