import * as typeProduct from './../constant/home';

export const GetDataProduct=()=>{
    return {
        type:typeProduct.GetProduct
    }
}

export const GetDataProductSuccess=(data)=>{
    return {
        type:typeProduct.GetProductSuccess,
        data
    }
}

export const GetDataProductSelectSuccess=(data)=>{
    return {
        type:typeProduct.GetProductSelectSuccess
    }
}


//slider
export const GetDataSlider=()=>{
    return {
        type:typeProduct.GetSlider
    }
}
export const GetDataSliderSuccess=(data)=>{
    return {
        type:typeProduct.GetSliderSuccess,
        data
    }
}


export const GetDataProductSlider=()=>{
    return{
        type:typeProduct.GetDataProductSlider,
    }
}

export const GetDataProductSliderSuccess=(data)=>{
    return{
        type:typeProduct.GetDataProductSliderSuccess,
        data
    }
}