const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

app.use(cors({
    origin: ["https://zynka.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to Zynka Server" })
})

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ...")
})

//Routes 
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))


//connect mongoDB

const URI = process.env.MONGODB_URL;


mongoose.connect(URI, {

}).then(() => {
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
