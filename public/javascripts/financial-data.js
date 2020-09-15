axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
.then(response =>{
    console.log(response.data, 'BPI OK');
    printTheChart( response.data.bpi)
})
.catch(err => console.log(err))


function printTheChart(stockData) {
  const dates = Object.keys(stockData);
  const bitCoins = dates.map(date => stockData[date]);
  console.log('bitcoins:',bitCoins);
  const ctx = document.getElementById('my-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: 'BitCoin Value',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: bitCoins
        }
      ]
    }
  }); // closes chart = new Chart()
} // closes printTheChart()
const stockPrices = stockDates.map(date => dailyData[date]['4. close']);