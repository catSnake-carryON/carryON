const mongoose = require('mongoose');
//const { post } = require('../routes/tripRouter');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  prevPackingLists: [[{ type: Schema.Types.ObjectId, ref: 'packingList' }]],
});

const packingItemSchema = new Schema({
  item: { type: String },
  quantity: { type: Number },
  packed: { type: Boolean, default: false },
});

const packingListSchema = new Schema({
  tripName: {type: String, required: false},
  destination: {type: String, required: false},
  startDate: {type: Date, required: false},
  endDate: {type: Date, required: false},
  listOfPackingItems: [packingItemSchema]
})

// console.log(packingItemSchema);

const packingList = mongoose.model('packingList', packingListSchema);

// const tripsList = mongoose.model('TripList', trip);

const User = mongoose.model('User', userSchema);

module.exports = { User, packingList };
