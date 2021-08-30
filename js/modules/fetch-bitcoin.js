export default function initFecthBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const btcpreco = document.querySelector('.btc-preco');
      btcpreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    }).catch((error) => console.log(error));
}
