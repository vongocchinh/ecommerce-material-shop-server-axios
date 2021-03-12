import { put, select, takeLatest } from "redux-saga/effects";
import * as types from "./../../constant/product";
import { AddProductCartActionSuccess } from "./../../actions/product";
import * as format from "../../utils/format";
import getApiServer from "./../../utils/getApiServer";
function* AddCartServer(body) {
  var res = yield getApiServer("cart", "POST", body);
  return res;
}
function* AddQtyCartServer(id){
  var res = yield getApiServer("cart/qty/"+id, "PUT", null);
  return res;
}
function* GetDataCart() {
  var res = yield getApiServer("cart", "GET", null);
  return res;
}
function* addCart({ payload }) {
  

  const res = yield GetDataCart();
  const cartServer = res.data;
  const idNewServer = format.findIndexCart(cartServer, payload.product.id);
  if(idNewServer!==-1){
    yield AddQtyCartServer(idNewServer);
  }else{
    yield AddCartServer({
      id_product: payload.product.id,
      qty: 1,
    });
  }

  const cartState = yield select((state) => state.CartMyReducer);
  const idPayload = parseInt(payload.product.id, 10);
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
