"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const path_1 = __importDefault(require("path"));
const express = require('express');
const adminRoute = require('./routes/admin');
const app = express();
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use('/', adminRoute);
app.use(express.static(path_1.default.join(__dirname, '../public')));
mongoose.connect('mongodb://localhost:27017/Rasal-Shop')
    .then(() => {
    console.log('dbs connected...');
}).catch((error) => {
    console.log(error.message);
});
app.listen(3000, () => {
    console.log(`server is running on port http://localhost:${3000}`);
});
