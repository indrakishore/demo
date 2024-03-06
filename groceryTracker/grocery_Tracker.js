let amount1;
let amount2;
let amount3;

function calculateArea() {
    amount1 = parseFloat(document.getElementById('Grocery1').value);
    amount2 = parseFloat(document.getElementById('Grocery2').value);
    amount3 = parseFloat(document.getElementById("Grocery3").value)
   
   let total_amount = amount1 + amount2 + amount3;
   document.getElementById('result').innerText = `The Total Amount is: ${total_amount}`;
}
