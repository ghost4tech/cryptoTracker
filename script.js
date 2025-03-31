let fetchBtn = document
  .getElementById("fetchBtn")
  .addEventListener("click", fetchPrice);
let infoArea = document.getElementById("info-area");

async function fetchPrice() {
  let crypto = document.getElementById("cryptoSelect").value;
  let currency = document.getElementById("currencySelect").value;

  const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;

  try {
    let response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed Fetching Data");
    }
    let data = await response.json();
    let symbol = "";
    if (currency === "usd") {
      symbol = "$";
    } else if (currency === "eur") {
      symbol = "€";
    } else if (currency === "gbp") {
      symbol = "£";
    }
    infoArea.textContent =
      "The Price Of " + crypto + " is: " + data[crypto][currency] + symbol;
    // console.log(data[crypto][currency]);
  } catch (error) {
    console.error("Error:", error);
  }
}
