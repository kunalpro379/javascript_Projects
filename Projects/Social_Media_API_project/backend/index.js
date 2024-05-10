const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const connectDB = require("./database/db");

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

console.log('Loaded MONGO_URI:', process.env.MONGO_URI);

const port = process.env.PORT || 7000;
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
