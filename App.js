const express = require('express')
const mongoose = require('mongoose')

const UserRoute = require('./routes/UsersRoutes')
const coinRoutes = require('./routes/coinsRoutes')
const profileRoutes = require('./routes/profileRoutes')
const TradingView = require('./routes/TradingView')
const Spot = require('./routes/Spot')
const transaction = require('./routes/Transaction')
const depositRoute = require('./routes/depositRoutes')
const transfer = require('./routes/transferRoutes')
const withdraw = require('./routes/withdrawRoutes')

const cors = require('cors');

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/users', UserRoute)
app.use('/api/coin', coinRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/tradingview', TradingView)
app.use('/api/spot', Spot)
app.use('/api', transaction)
app.use("/api/deposit", depositRoute)
app.use('/api/transfer', transfer)
app.use('/api/', withdraw)


mongoose.set('strictQuery', false);

// connect database
const dbUri = 'mongodb+srv://Highscoretech:Keys2541@highscore.muku4gg.mongodb.net/dcc?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result)=>  console.log('Database connected'))
    .catch((err)=> console.log(err))

app.listen(process.env.PORT, ()=>{
    console.log("Running on port "+ process.env.PORT)
})

