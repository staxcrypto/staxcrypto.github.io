async function fetchCryptoPrices() {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
    const data = await response.json();
    
    document.getElementById("btc-price").innerText = `$${data.bitcoin.usd}`;
    document.getElementById("eth-price").innerText = `$${data.ethereum.usd}`;
}

setInterval(fetchCryptoPrices, 5000);
