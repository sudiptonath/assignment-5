const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-btn-color');
    donationTab.classList.remove('bg-btn-color');
    document.getElementById('donation-from').classList.add('hidden');
    document.getElementById('history-form').classList.remove('hidden')
})
donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-btn-color');
    historyTab.classList.remove('bg-btn-color');
    document.getElementById('donation-from').classList.remove('hidden');
    document.getElementById('history-form').classList.add('hidden');
})