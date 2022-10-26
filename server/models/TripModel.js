const mongoose = require('mongoose');

const { Schema } = mongoose;

const tripSchema = new Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
