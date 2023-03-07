const axios = require("axios")

let apiResponce;
let apiError;
let api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`

axios.get(api)
.then((res) =>{
    apiResponce = (res.data)
})
.catch((error)=>{
     apiError = ({error:error.message})
})

// Fetch all coin
const Allcoins= (async (req, res)=>{
   res.json(apiResponce)
})

// Fetch all Hot coins
const Hotcoins= (async (req, res)=>{

const hot = [`Bitcoin`,`Ethereum`,`XRP`,`Cardano`,` Dogecoin`,`Polygon`,`OKB`,`Solana`,`Shiba Inu`,`Litecoin`,`Avalanche`, 
            `TRON`,`Uniswap`,   `Bitcoin Cash`, `NEAR Protocol`,`Filecoin`,`KuCoin`,`BitTorrent`,`Trust Wallet`,`Holo`,`Audius`,`CANTO`,`Olympus`,`SafeMoon [OLD]`,
            `LINK`,`Chia`,`Astar`,`Flux`
        ]

        var newArray = res.filter((el) => {
            return  hot.includes(el);
            });
        res.json(newArray)
 })

 // Fetch all coin
const Gainercoins = (async (req, res)=>{
    res.json(apiResponce)
 })

module.exports = { Allcoins ,Hotcoins, Gainercoins }