require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () => {
    const url = process.env.MONGO_CONNECTION_URI;
    await mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true,
        
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).on('error',err => {
        console.error('Connection failed ☹️☹️☹️☹️');
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;