document.getElementById('btn-donation').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = addMoneyForFlood ('input-donate');
    let accountBalance = document.getElementById('account-balance').innerText;
    let accountBalanceNumber = parseFloat(accountBalance);
    if(addMoney <= accountBalanceNumber && accountBalanceNumber >= 0  ){
        let totalBalance = accountBalanceNumber - addMoney ;
        if(totalBalance > accountBalanceNumber){
            return true;
        }
        document .getElementById('account-balance').innerText = totalBalance;
       }
       else{
        alert('you have not enough balance ');
        return true;
        
       }
    })
    // -----------------> second section 
document.getElementById('btn-f-flood').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = addMoneyForFlood ('f-donation');
    let accountBalance = document.getElementById('account-balance').innerText;
    let accountBalanceNumber = parseFloat(accountBalance);
    if(addMoney <= accountBalanceNumber && accountBalanceNumber >= 0  ){
        let totalBalance = accountBalanceNumber - addMoney ;
        if(totalBalance > accountBalanceNumber){
            return true;
        }
        document .getElementById('account-balance').innerText = totalBalance;
       }
       else{
        alert('you have not enough balance')
        
       }
    })
    // --------------------->Third-section 
document.getElementById('btn-quota').addEventListener('click', function(event){
    event.preventDefault();
    let addMoney = addMoneyForFlood ('quota-donate');
    let accountBalance = document.getElementById('account-balance').innerText;
    let accountBalanceNumber = parseFloat(accountBalance);
    if(addMoney <= accountBalanceNumber && accountBalanceNumber >= 0  ){
        let totalBalance = accountBalanceNumber - addMoney ;
        if(totalBalance > accountBalanceNumber){
            return true;
        }
        document .getElementById('account-balance').innerText = totalBalance;
       }
       else{
        alert('You have not enough balance')
        
       }
    })
