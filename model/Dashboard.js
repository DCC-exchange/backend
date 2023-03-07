// const mongoose = require('mongoose')

// const dashboardSchema = new mongoose.Schema({
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User'
//     },
//     balances: {
//       BTC: {
//         type: Number,
//         default: 0
//       },
//       ETH: {
//         type: Number,
//         default: 0
//       },
//       USDT: {
//         type: Number,
//         default: 0
//       }
//     },
//     trades: [{
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Trade'
//     }],
//     notifications: [{
//       type: String
//     }],
//     lastLogin: {
//       type: Date,
//       default: Date.now
//     }
//   });
  
//   const Dashboard = mongoose.model('Dashboard', dashboardSchema);
  
//   module.exports = Dashboard;