function compute() {
    var amount= document.getElementById("amount").value;
    var year=document.getElementById("year").value;
    var rate=document.getElementById("rate").value;

    var total= (amount*year*rate)/100

    document.getElementById("displayResult").innerText="If you deposit "+amount+" at an interest rate of "+rate+"% You will receive an amount "+total+" in the year "+(2022+year);
}

function getRate() {
 var rateValue= document.getElementById("rate").value;

 document.getElementById("rate_value").innerText=rateValue+"%";
}