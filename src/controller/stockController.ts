import { Request, Response } from "express";
import ProductDb from "../model/model";
import { findSourceMap } from "module";

const loadHome = async (req: Request, res: Response) => {
    const products = await ProductDb.find()
    res.render('home', { products })
}

const addProduct = async (req: Request, res: Response) => {
    const { name, quantity, price } = req.body
    const newProduct = new ProductDb({
        name: name,
        quantity: quantity,
        price: price
    })
    newProduct.save()

    return res.json({ success: 'Product added successfully ' })

}

const removeProduct = async (req: Request, res: Response) => {
    const id = req.query.id  // Cast to string to ensure correct type
    

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


const getEditInfo = async (req:Request,res:Response)=>{
    try {
        const id = req.query.id
        const item = await ProductDb.findOne({_id:id});
        
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

     res.render('edit',{item})

    } catch (error) {
        console.error('Error editing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const editItem = async (req:Request,res:Response)=>{
    try {
        const {name,quantity,price} = req.body
        const id = req.query.id
        if (!id) {
            return res.status(400).json({ error: 'ID is required' });
        }
        console.log('id ',id);
        
        const updatedItem =  await ProductDb.findByIdAndUpdate(id,{
            name:name,
            quantity:quantity,
            price:price
        })

        if (updatedItem) {
            res.status(200).json({success:'Item updated successfully'})
        }



    } catch (error) {
        console.error('Error editing item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    loadHome,
    addProduct,
    removeProduct,
    getEditInfo,
    editItem
}