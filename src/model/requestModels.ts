
export interface AddProductRequest {
    name: string;
    quantity: number;
    price: number;
}

export interface EditProductRequest {
    id: string;  
    name: string;
    quantity: number;
    price: number;
}

export interface RemoveProductRequest {
    id: string; 
}
