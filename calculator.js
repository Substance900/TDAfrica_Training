function compute() {
    var amount= document.getElementById("amount").value;
    var year=document.getElementById("year").value;
    var rate=document.getElementById("rate").value;

    var total= (amount*year*rate)/100

    document.getElementById("displayResult").innerHTML="If you deposit <mark>"+amount+"</mark> at an interest rate of <mark>"+rate+"% </mark> <br>You will receive an amount <mark>"+total+"</mark> in the year <mark>"+( new Date().getFullYear()+parseInt(year))+"</mark>";
}

function getRate() {
 var rateValue= document.getElementById("rate").value;

 document.getElementById("rate_value").innerText=rateValue+"%";
}