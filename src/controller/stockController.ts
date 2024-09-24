
import { Request, Response } from "express";
import ProductDb from "../model/model"; // Assuming ProductDb is your Mongoose model
import { AddProductRequest, EditProductRequest, RemoveProductRequest } from "../model/requestModels";
import { AddProductResponse, RemoveProductResponse, EditProductResponse, GetEditInfoResponse } from "../model/responseModels";

// Load Home
const loadHome = async (req: Request, res: Response) => {
    const products = await ProductDb.find();
    res.render('home', { products });
};

// Add Product
const addProduct = async (req: Request<{}, {}, AddProductRequest>, res: Response<AddProductResponse>) => {
    const { name, quantity, price } = req.body;
    const newProduct = new ProductDb({ name, quantity, price });
    
    await newProduct.save();

    return res.json({ success: 'Product added successfully' });
};

// Remove Product
const removeProduct = async (req: Request<{}, {}, RemoveProductRequest>, res: Response<RemoveProductResponse>) => {
    const id = req.query.id as string; // Cast to string to ensure correct type

    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }

    try {
        const removedItem = await ProductDb.findByIdAndDelete(id);
        
        if (!removedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        return res.json({ success: 'Item removed successfully' });
    } catch (error) {
        console.error('Error removing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Edit Info
const getEditInfo = async (req: Request, res: Response<GetEditInfoResponse>) => {
    try {
        const id = req.query.id as string;
        const item = await ProductDb.findById(id);

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.render('edit', { item });
    } catch (error) {
        console.error('Error editing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Edit Item
const editItem = async (req: Request<{}, {}, EditProductRequest>, res: Response<EditProductResponse>) => {
    try {
        const { name, quantity, price } = req.body;
        const id = req.query.id as string;

        if (!id) {
            return res.status(400).json({ error: 'ID is required' });
        }

        const updatedItem = await ProductDb.findByIdAndUpdate(id, { name, quantity, price }, { new: true });

        if (updatedItem) {
            res.status(200).json({ success: 'Item updated successfully' });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        console.error('Error editing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    loadHome,
    addProduct,
    removeProduct,
    getEditInfo,
    editItem
};
