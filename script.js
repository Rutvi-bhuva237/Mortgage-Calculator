function changecolor(){ 



    let radios = document.querySelectorAll('input[name="mortgageType"]'); 

    radios.forEach(radio => {
        let parentDiv = radio.closest(".Repayment"); 

        if (radio.checked) {
            parentDiv.style.border = "2px solid yellow"; 
            parentDiv.style.backgroundColor = "lightyellow";
        } else {
            parentDiv.style.border = "2px solid grey"; 
            parentDiv.style.backgroundColor = "white";
        }
    });

}



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
    let years = parseFloat(document.getElementById("loanTerm").value);
    let monthlyInterestRate = (interestRate / 100) / 12;
    let totalMonths = years * 12;
    
      

    let monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
                         (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
                         
    
    let totalPaid = monthlyPayment * totalMonths;

    
    let totalInterestPaid = totalPaid - loanAmount;

    
    let formattedMonthlyPayment = monthlyPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    let formattedTotalPaid = totalInterestPaid.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });



    
   
    document.getElementById("monthly-Payment").innerText = formattedMonthlyPayment;
    document.getElementById("Total-Payment").innerText = formattedTotalPaid;




    
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
