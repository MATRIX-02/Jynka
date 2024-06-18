const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Ecommerce Server' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Routes
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/categoryRouter'));

// Connect MongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {console.log(error)});