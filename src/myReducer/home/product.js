import * as typeProduct from "./../../constant/home";

var initialState = [];
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeProduct.GetProductSuccess:
      state = action.data;
      return state;
    default:
      return state;
  }
};
export default myReducer;
