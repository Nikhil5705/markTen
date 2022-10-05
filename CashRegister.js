const checkButton = document.querySelector("#check-Button");
const billAmount  = document.querySelector("input#billamount");
const cashReceived = document.querySelector("#cash-Received");
const errorMessage = document.querySelector("#message");
const notes = document.querySelectorAll(".notes-of-notes");

const availablenotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

checkButton.addEventListener("click", function CheckBill(){
    errorMessage.style.display = "none";
    if(billAmount.value > 0){
        if(cashReceived.value >= billAmount.value){
           const amountToBeReturned = cashReceived.value - billAmount.value;
           calculateDifference(amountToBeReturned);
        }
        else{
            displayMessage("Invalid Bill Amount");
        }
    }
    else{
        displayMessage("Enter a Valid Bill Amount");
    }
});

function calculateDifference(amountToBeReturned){
for(i=0; i < availablenotes.length; i++){
const note = Math.trunc(amountToBeReturned / availablenotes[i]);
amountToBeReturned = amountToBeReturned % availablenotes[i];
notes[i].innerText = note;
}
}
function displayMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg
}