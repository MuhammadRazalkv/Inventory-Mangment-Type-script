const mongoose = require('mongoose')
import path from "path"
const express = require('express')
const adminRoute = require('./routes/admin')
const app = express()
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/', adminRoute)
app.use(express.static(path.join(__dirname, '../public')));


mongoose.connect('mongodb://localhost:27017/Rasal-Shop')

    .then(() => {
        console.log('dbs connected...')
    }).catch((error: any) => {
        console.log(error.message);
    });


app.listen(3000, () => {
    console.log(`server is running on port http://localhost:${3000}`)
})