import * as types from "../../constant/product";
import * as typesCart from "../../constant/cart";

var data = JSON.parse(localStorage.getItem("cart"));
var initialState = data ? data : [];
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GetProductCartSuccess:
      return [...state];
    case types.AddProductCartSuccess:
      state = actions.payload.dataCart;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case typesCart.DELETE_CART_SUCCESS:
      state = actions.payload.data;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case typesCart.UPDATE_CART_INCREASE_SUCCESS:
      state = actions.payload.data;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case typesCart.UPDATE_CART_REDUCTION_SUCCESS:
      state = actions.payload.data;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default myReducer;
