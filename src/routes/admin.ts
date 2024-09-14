import { Request, Response } from "express";

const express = require('express')
const controller = require('../controller/stockController')
const adminRoute = express()

adminRoute.set('view engine', 'ejs');
adminRoute.set('views', './view');

adminRoute.get('/', controller.loadHome);
adminRoute.post('/addProduct', controller.addProduct);
adminRoute.get('/removeProduct',controller.removeProduct)
adminRoute.get('/editProduct',controller.getEditInfo)
adminRoute.post('/editItem',controller.editItem)


module.exports = adminRoute 