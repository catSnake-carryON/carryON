/* eslint-disable no-console */
const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://dennis:park@scratch.lkftk6o.mongodb.net/apps?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'apps',
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('mongodb', error);
    process.exit(1);
  }
};

module.exports = connectDB;
