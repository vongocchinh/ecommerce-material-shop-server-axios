import * as typeSlier from '../../constant/home';

var initialState=[];
const myReducer=(state=initialState,action)=>{
    switch (action.type) {
        case typeSlier.GetSliderSuccess:
            state=action.data;
        return state;
        default:
            return state;
    }
}
export default myReducer;