document.getElementById('btn-donation').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = addMoneyForFlood ('input-donate');
    let balance = testUtilitiesValue ('donation-balance');
    let walletBalance = testUtilitiesValue ('account-balance');
    if(!isNaN(addMoney) && addMoney > 0){
        const totalBalance = balance + addMoney ;
        if(totalBalance > walletBalance){
            return true;
        }
        document .getElementById('donation-balance').innerText = totalBalance;
        // ------------->transaction 
        const div = document.createElement('div');
            div.innerHTML = `<p>${addMoney} Taka is Donated for famine-2024 at noakhali, Bangladesh</p>
             <p> Date : ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p> `
           document.getElementById('transaction-history').appendChild(div);
           let popup = document.querySelector('.popup').classList.remove('hidden')
           return popup;
           
       }
       else{
       alert('Enter the positive (+) number')
      }
    })
    // ------------second part-->
    document.getElementById('btn-f-flood').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = addMoneyForFlood ('f-donation');
    let balance = testUtilitiesValue ('f-main-balance');
    let accountBalance = document.getElementById('account-balance').innerText;
    let accountBalanceNumber = parseFloat(accountBalance);
    
    if(!isNaN(addMoney) && addMoney > 0){
        const totalBalance = balance + addMoney ;
        if (totalBalance > accountBalanceNumber){
            return true;
        }
        document .getElementById('f-main-balance').innerText = totalBalance;
        // ------------->transaction
        const div = document.createElement('div');
            div.innerHTML = `<p>${addMoney} Taka is Donated for Flood Relief in Feni,Bangladesh </p>
             <p> Date : ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p> `
           document.getElementById('transaction-history').appendChild(div);
           let popup = document.querySelector('.popup').classList.remove('hidden')
           return popup;
       }
       else{
        alert('Enter the positive (+) number')
       }
    })
    // -------third part--------->
    document.getElementById('btn-quota').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = addMoneyForFlood ('quota-donate');
    let balance = testUtilitiesValue ('quota-main-balance');
    let accountBalance = document.getElementById('account-balance').innerText;
    let accountBalanceNumber = parseFloat(accountBalance);
    
    if(!isNaN(addMoney) && addMoney > 0){
        const totalBalance = balance + addMoney ;
        if(totalBalance > accountBalanceNumber){
            return true;
        }
        document .getElementById('quota-main-balance').innerText = totalBalance;
        // --------------->transaction 
        const div = document.createElement('div');
            div.innerHTML = `<p>${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
             <p> Date : ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p> `
           document.getElementById('transaction-history').appendChild(div);
           let popup = document.querySelector('.popup').classList.remove('hidden')
           return popup;
       }
       else{
        alert('Enter the positive (+) number')
       }
    })