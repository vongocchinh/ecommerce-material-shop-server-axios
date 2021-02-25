/* eslint-disable no-const-assign */
/* eslint-disable require-yield */
import { put, select } from "redux-saga/effects";
import * as types from "./../../constant/cart";
import { DELETE_CART_SUCCESS ,Update_CART_Increase_SUCCESS,Update_Cart_Reduction_Success} from "./../../actions/cart";
import * as format from "../../utils/format";
import { takeEvery } from 'redux-saga/effects';

function* deleteCart({ payload }) {
  const cartState = yield select((state) => state.CartMyReducer);
  const idPayload = payload.product.id;
  const idNew = format.findIndex(cartState, idPayload);
  cartState.splice(idNew,1);
  yield put(DELETE_CART_SUCCESS(cartState));
}
function* IncreaseCart({ payload }) {
  const cartState = yield select((state) => state.CartMyReducer);
  const idPayload = payload.product.id;
  const idNew = format.findIndex(cartState, idPayload);
  if(idNew !== -1){
    cartState[idNew].quantity+=1;
  }
  yield put(Update_CART_Increase_SUCCESS(cartState));
}
function* ReductionCart({ payload }) {
  const cartState = yield select((state) => state.CartMyReducer);
  const idPayload = payload.product.id;
  const idNew = format.findIndex(cartState, idPayload);
  if(idNew !== -1){
    cartState[idNew].quantity-=1;
  }
  if(idNew !== -1){
    if(cartState[idNew].quantity < 1){
      cartState.splice(idNew,1);
    }
  }
  yield put(Update_Cart_Reduction_Success(cartState));
}
function* rootSagaUpdateCart() {
  yield takeEvery(types.DELETE_CART, deleteCart);
  yield takeEvery(types.UPDATE_CART_INCREASE, IncreaseCart);
  yield takeEvery(types.UPDATE_CART_REDUCTION, ReductionCart);
}

export default rootSagaUpdateCart;
