"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model/model"));
const loadHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield model_1.default.find();
    res.render('home', { products });
});
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, quantity, price } = req.body;
    const newProduct = new model_1.default({
        name: name,
        quantity: quantity,
        price: price
    });
    newProduct.save();
    return res.json({ success: 'Product added successfully ' });
});
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id; // Cast to string to ensure correct type
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    try {
        const removedItem = yield model_1.default.findByIdAndDelete(id);
        if (!removedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        return res.json({ success: 'Item removed successfully' });
    }
    catch (error) {
        console.error('Error removing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
const getEditInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const item = yield model_1.default.findOne({ _id: id });
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.render('edit', { item });
    }
    catch (error) {
        console.error('Error editing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
const editItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, quantity, price } = req.body;
        const id = req.query.id;
        if (!id) {
            return res.status(400).json({ error: 'ID is required' });
        }
        console.log('id ', id);
        const updatedItem = yield model_1.default.findByIdAndUpdate(id, {
            name: name,
            quantity: quantity,
            price: price
        });
        if (updatedItem) {
            res.status(200).json({ success: 'Item updated successfully' });
        }
    }
    catch (error) {
        console.error('Error editing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = {
    loadHome,
    addProduct,
    removeProduct,
    getEditInfo,
    editItem
};
