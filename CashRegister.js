var billAmount  = document.querySelector("#billamount");
var cashReceived = document.querySelector("#cash-Received");
var checkButton = document.querySelector("#check-Button");
var errorMessage = document.querySelector("#message");
var notes = document.querySelectorAll(".notes-of-notes");

var availablenotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function CheckBill(){
    errorMessage.style.display = "none";

    var bill = Number(billAmount.value);
    var cash = Number(cashReceived.value);
    if(bill > 0){
        if(cash >= bill){
           var amountToBeReturned = cash - bill;
           calculateDifference(amountToBeReturned);
        }
        else{
            displayMessage("Given cash should be greater than the bill amount");
            calculateDifference(0);
        }
    }
    else{
        displayMessage("Enter a Valid Bill Amount");
        calculateDifference(0);
    }
});
function calculateDifference(amountToBeReturned){
for(let i=0; i < availablenotes.length; i++){
var note = Math.trunc(amountToBeReturned / availablenotes[i]);
amountToBeReturned %= availablenotes[i];
notes[i].innerText = note;
  }
}
function displayMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg
}