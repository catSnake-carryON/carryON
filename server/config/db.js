/* eslint-disable no-console */
const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://carryON-team:codesmith@carryon.y4kw448.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  console.log('trying to connect to DB')
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
