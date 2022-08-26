const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI ||
        'mongodb+srv://allanladev:mernstack@dashboard.3txgk.mongodb.net/dashboard?authSource=admin&replicaSet=atlas-w1no9n-shard-0&readPreference=primary&ssl=true'
    );
    console.log('database connected');
  } catch (error) {
    console.log('error connecting database');
    process.exit(1);
  }
};

module.exports = { connectDB };
