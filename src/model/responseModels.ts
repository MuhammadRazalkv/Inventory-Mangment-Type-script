
export interface BaseResponse {
    success?: string; 
    error?: string;    
}

export interface AddProductResponse extends BaseResponse {
    success: string; 
}

export interface RemoveProductResponse extends BaseResponse {
  
}

export interface EditProductResponse extends BaseResponse {
    success?: string; 
}

export interface GetEditInfoResponse extends BaseResponse {
    item?: {
        id: string;
        name: string;
        quantity: number;
        price: number;
    };
}
