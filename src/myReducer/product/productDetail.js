import * as types from '../../constant/product';

var initialState={
productDetail:{}
};
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.GetProductDeTailSuccess:
        const {product}=actions.payload;
        state={
            ...state,
            productDetail:product
        }
        return state;
        default:
            return state;
    }
}
export default myReducer;