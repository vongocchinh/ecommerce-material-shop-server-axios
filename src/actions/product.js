import * as types from '../constant/product';

export const ProductDetailAction=(id)=>{
    return {
        type:types.GetProductDeTail,
        payload:{
            id
        }
    }
}

export const ProductDetailActionSuccess=(product)=>{
    return {
        type:types.GetProductDeTailSuccess,
        payload:{
            product
        }
    }
}


export const AddProductCartAction=(product)=>{
    return {
        type:types.AddProductCart,
        payload:{
            product
        }
    }
}

export const AddProductCartActionSuccess=(dataCart)=>{
    return {
        type:types.AddProductCartSuccess,
        payload:{
            dataCart
        }
    }
}