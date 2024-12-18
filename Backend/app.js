require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("helllo wrold")
})


app.use('/users', userRoutes);


module.exports = app;