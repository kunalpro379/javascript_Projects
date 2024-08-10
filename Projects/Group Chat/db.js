const mongoose = require('mongoose');

// Function to connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connection Successful');
    } catch (err) {
        console.log('Database Connection Error:', err);
    }
};

module.exports = connectDB; // Exporting the correct function
