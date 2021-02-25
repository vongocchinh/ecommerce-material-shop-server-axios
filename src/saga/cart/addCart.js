import { put, select, takeLatest } from "redux-saga/effects";
import * as types from "./../../constant/product";
import { AddProductCartActionSuccess } from "./../../actions/product";
import * as format from "../../utils/format";

function* addCart({ payload }) {
  const cartState = yield select((state) => state.CartMyReducer);
  const idPayload = parseInt(payload.product.id,10);
  const idNew = format.findIndex(cartState, idPayload);
  if (idNew !== -1) {
    cartState[idNew].quantity += 1;
  } else {
    var cartStateNew = {
      product: payload.product,
      quantity: 1,
    };
    cartState.push(cartStateNew);
  }
  yield put(AddProductCartActionSuccess(cartState));
}
function* rootSagaAddCart() {
  yield takeLatest(types.AddProductCart, addCart);
}

export default rootSagaAddCart;
