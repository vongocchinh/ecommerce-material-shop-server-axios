import * as types from './../constant/header';

export const nameSearchAction=(data)=>{
    return {
        type:types.SEARCH,
        payload:{
            name:data
        }
    }
}

export const handleProductGetNameAction=(key)=>{
    return{
        type:types.GetProductKeyName,
        payload:{
            keyword:key
        }
    }
}

export const SearchProductSuccess=({payload})=>{
    return {
        type:types.SEARCH_SUCCESS,
        payload:{
            listFillTer:payload.listFillTer,
            keyword:payload.keyword
        }
    }
}



export const handleResetRouterProduct=()=>{
    return{
        type:types.handleResetRouterProduct
    }
}