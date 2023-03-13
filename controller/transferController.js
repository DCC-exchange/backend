const Deposit = require('../models/Deposit');
const Transfer = require('../models/Transfer');

const transferMoneyOrCoin = async (senderId, receiverId, amount, currency) => {

    try {
    // Check if sender has enough funds
    const senderBalance = await Deposit.aggregate([
      { $match: { user_id: senderId, currency } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);
    if (senderBalance.length === 0 || senderBalance[0].total < amount) {
      throw new Error('Insufficient funds')
    }

    // Create transfer record
    const transfer = new Transfer({
      sender_id: senderId,
      receiver_id: receiverId,
      amount,
      currency,
      status: 'completed'
    });
    await transfer.save()

    //.. Update sender's balance
    const senderDeposit = await Deposit.findOne({ user_id: senderId, currency })
    senderDeposit.amount -= amount
    await senderDeposit.save()

    //.. Update receiver's balance or create new deposit
    const receiverDeposit = await Deposit.findOne({ user_id: receiverId, currency })
    if (receiverDeposit) {
      receiverDeposit.amount += amount
      await receiverDeposit.save()
    } else {
      const newDeposit = new Deposit({
        user_id: receiverId,
        amount,
        currency,
        status: 'completed'
      });
      await newDeposit.save()
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  transferMoneyOrCoin
};
