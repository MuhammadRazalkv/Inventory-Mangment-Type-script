import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the IProduct interface that extends Document
interface IProduct extends Document {
    name: string;
    price: number;
    quantity: number;
}

// Define the Product Schema
const productSchema: Schema<IProduct> = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 0 },
});

// Create the Product model
const Product: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);

export default Product;
