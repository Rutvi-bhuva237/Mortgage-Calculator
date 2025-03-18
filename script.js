function calculateMortgage() {
    let loanAmount = parseFloat(document.getElementById("amount").value);
    

    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let loanTerm = parseInt(document.getElementById("loanTerm").value);

    
     
    let mortgageType = document.querySelector('input[name="mortgageType"]:checked')?.value;

   
    let monthlyInterestRate = (interestRate / 100) / 12;

    
    let numberOfMonths = loanTerm * 12;

    
    let monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
                         (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    
    let totalRepayment = monthlyPayment * numberOfMonths;

   
    let formattedMonthlyPayment = monthlyPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    let formattedTotalRepayment = totalRepayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    
    document.getElementById("monthlyPayment").innerText = formattedMonthlyPayment;
    document.getElementById("totalRepayment").innerText = formattedTotalRepayment;
    

    
}




function calculateInterest(){

    let loanAmount = parseFloat(document.getElementById("amount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let monthlyInterestRate = (interestRate / 100) / 12;
    let interestPayment = loanAmount * monthlyInterestRate;
    let Payment = interestPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
   
   
    document.getElementById("monthly-Payment").innerText =  Payment;
    
}




function clearContent() {
    document.getElementById("amount").value = "";
    document.getElementById("interestRate").value = "";
    document.getElementById("loanTerm").value = "";

    
    document.querySelectorAll('input[name="mortgageType"]').forEach(input => input.checked = false);

    
    document.getElementById("monthlyPayment").innerText = "₹0.00";
    document.getElementById("totalRepayment").innerText = "₹0.00";
}
  
document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("Interest").addEventListener("change", function() {
            document.getElementById("interest-button").style.display = "inline-block";
            document.getElementById("calculatebutton").style.display = "none";
            document.getElementById("resultSection").style.display = "inline-block"
            document.getElementById("PaymentSection").style.display = "none" ;

        
        });

        document.getElementById("Payment").addEventListener("change", function() {
            document.getElementById("interest-button").style.display = "none";
            document.getElementById("calculatebutton").style.display = "inline-block";
            document.getElementById("PaymentSection").style.display = "inline-block"
            document.getElementById("resultSection").style.display = "none" ;
        });

});
