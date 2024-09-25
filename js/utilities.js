function addMoneyForFlood (id){
    const addMoney = document.getElementById(id).value ;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}
function testUtilitiesValue (id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}
// ------------------->
document.getElementById('blog-btn').addEventListener('click', function() {
    window.location.href = 'blog.html';  // Redirect to 'donation.html'
});
// ------------>
function closeAlert(){
    let popup = document.querySelector('.popup').classList.add('hidden');
}
