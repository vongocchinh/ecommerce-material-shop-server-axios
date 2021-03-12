import * as searchConstants from '../../constant/header';
// var data=JSON.parse(localStorage.getItem('productSearch'));
var initialState={
    searchRouter:false,
    list:[],
    keyword:'',
    listKeyWordSearch:JSON.parse(localStorage.getItem('keySearch'))?JSON.parse(localStorage.getItem('keySearch')):[]
};
var myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case searchConstants.SEARCH_SUCCESS:
            const {listFillTer,keyword}=action.payload;
            var listKS= state.listKeyWordSearch;
            listKS.push(keyword);
            if(listKS.length>10){
                listKS.splice(0,1);
            }
            state={
                ...state,
                list:listFillTer,
                searchRouter:true,
                keyword:keyword,
                listKeyWordSearch:listKS
            }
            localStorage.setItem('keySearch',JSON.stringify(listKS));
            // localStorage.setItem('productSearch',JSON.stringify(listFillTer));
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