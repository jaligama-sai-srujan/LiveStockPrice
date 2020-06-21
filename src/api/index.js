import axios from 'axios';

// const socket = new WebSocket('wss://ws.finnhub.io?token=brmjbvfrh5re15om5i4g');

// // Connection opened -> Subscribe
// socket.addEventListener('open', function (event) {
//     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
//     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
//     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
// });

// // Listen for messages
// socket.addEventListener('message', function (event) {
//     console.log('Message from server ', event.data);
// });

// // Unsubscribe
//  var unsubscribe = function(symbol) {
//     socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
// }

const url = 'https://cloud.iexapis.com/stable/stock';
const url_next = 'batch?token=pk_bf43ca80d2c94d2e917bf5c4cada195c&types=quote';
export const fetchData = async (company) =>{
    let changeableUrl = url;
if(company){
    changeableUrl = `${url}/${company}/${url_next}`
}
else{
    changeableUrl = `${url}/aapl/${url_next}`
}

    try{
        // console.log(await axios.get(`${url}`))
        const { data:{quote:{latestPrice,latestTime,symbol}} }= await axios.get(changeableUrl);
        console.log({symbol})
        return {latestPrice,latestTime,symbol}
        // const modifiedData={latestPrice}
        // return modifiedData;
    }catch(error){
        console.log(error);
        
    }
//     fetch(url)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//    })
//    .then(responseJson => {
//      this.addData(responseJson);
//    })
//    .catch(error => {
//      console.log(error);
// });
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}`)
        const modifiedData = data.map((dailyData)=>({
            latestPrice:dailyData.latestPrice
        }));
        return modifiedData;
    }catch(error){

    }
}


export const fetchCompany = async () =>{
    try{
        const {data} = await axios.get(`https://cloud.iexapis.com/beta/ref-data/symbols/?token=pk_bf43ca80d2c94d2e917bf5c4cada195c`)
        return data.map(item=>item.symbol)
        // return data.map((data)=> data)
    }catch(error){

    }
}