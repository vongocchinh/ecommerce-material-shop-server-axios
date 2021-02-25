/* eslint-disable require-yield */
import { put, takeEvery } from "redux-saga/effects";
import * as type from "../../constant/product";
import getApi from "../../utils/getApiServer";
import { ProductDetailActionSuccess } from "../../actions/product";
// import { take } from 'redux-saga/effects';
function* addCart({ payload }) {
  const { id } = payload;
  const res = yield getApi("products/productDetail/"+id, "GET", null);
 
  if (res.status === 200) {
    yield put(ProductDetailActionSuccess(res.data)); 
  }
}
function* rootSagaProductDetail() {
  yield takeEvery(type.GetProductDeTail,addCart);
}
export default rootSagaProductDetail;
