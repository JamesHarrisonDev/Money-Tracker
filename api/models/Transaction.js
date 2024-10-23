const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const TransactionSchema = new Schema( {
  price: {type: Number, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  datetime: {type: Date, required: false}
})

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;