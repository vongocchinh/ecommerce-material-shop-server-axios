import * as types from './../constant/cart';

export const Delete_Cart=(product)=>{
    return{
        type:types.DELETE_CART,
        payload:{
            product
        }
    }
}

export const DELETE_CART_SUCCESS=(data)=>{
    return{
        type:types.DELETE_CART_SUCCESS,
        payload:{
            data
        }
    }
}


export const Update_Cart_Increase=(product)=>{
    return{
        type:types.UPDATE_CART_INCREASE,
        payload:{
            product
        }
    }
}

export const Update_CART_Increase_SUCCESS=(data)=>{
    return{
        type:types.UPDATE_CART_INCREASE_SUCCESS,
        payload:{
            data
        }
    }
}


export const Update_Cart_Reduction=(product)=>{
    return{
        type:types.UPDATE_CART_REDUCTION,
        payload:{
            product
        }
    }
}

export const Update_Cart_Reduction_Success=(data)=>{
    return{
        type:types.UPDATE_CART_REDUCTION_SUCCESS,
        payload:{
            data
        }
    }
}