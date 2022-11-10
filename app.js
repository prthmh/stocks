const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputEle = document.querySelector("#output");
const message = document.querySelector("#error");

function calculateProfitAndLoss(initial, quantity, current) {
  hideMessage();
  if (initial >= 0 && quantity >= 0 && current >= 0) {
    if (initial > current) {
      var loss = (initial - current) * quantity;
      var lossPercentage = (loss / initial) * 100;
      showOutput(
        `The loss is ${loss} and the percentage is ${lossPercentage}%`
      );
    } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercentage = (profit / initial) * 100;
      showOutput(
        `The profit is ${profit} and the percentage is ${profitPercentage}%`
      );
    } else {
      showOutput("No profit no loss.");
    }
  } else {
   showMessage("Please enter positive values.")
  }
}

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var cur = Number(currentPrice.value);
  calculateProfitAndLoss(ip, qty, cur);
}

function showOutput(msg) {
  outputEle.innerHTML = msg;
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
submitBtn.addEventListener("click", submitHandler);
