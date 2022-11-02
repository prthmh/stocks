const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputEle = document.querySelector("#output");


function calculateProfitAndLoss(initial, quantity, current){
     if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput(`The loss is ${loss} and the percentage is ${lossPercentage}%`);
     } else if(current > initial){
        var profit = (current-initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput(`The profit is ${profit} and the percentage is ${profitPercentage}%`);
     } else {
        showOutput("No profit no loss.")
     }
    
}

function submitHandler(){
     var ip = Number(initialPrice.value);
     var qty = Number(stocksQuantity.value);
     var cur = Number(currentPrice.value);
     calculateProfitAndLoss(ip, qty, cur);
}

function showOutput(msg){
    outputEle.innerHTML = msg;
}

submitBtn.addEventListener("click", submitHandler);

