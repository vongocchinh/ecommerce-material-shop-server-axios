import * as searchConstants from '../../constant/header';
var data=JSON.parse(localStorage.getItem('productSearch'));
var initialState={
    searchRouter:false,
    list:data?data:[],
    keyword:''
};
var myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case searchConstants.SEARCH_SUCCESS:
            const {listFillTer,keyword}=action.payload;
            state={
                ...state,
                list:listFillTer,
                searchRouter:true,
                keyword:keyword
            }
            localStorage.setItem('productSearch',JSON.stringify(listFillTer));
        return state;

        case searchConstants.handleResetRouterProduct:
            state={
                ...state,
                searchRouter:false
            }
            return state;
        default:
            return state;
    }
}
export default myReducer;