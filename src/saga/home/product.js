/* eslint-disable require-yield */
import {  fork, put, select, take, takeEvery } from "redux-saga/effects";
import * as typeHome from "./../../constant/home";
// import { fetchGetDataProductHome } from "./../../api/api";
import getApi from './../../utils/getApi';
import {
  GetDataProductSuccess,
  GetDataProductSelectSuccess,
} from "./../../actions/home";
function* getProductSaga() {
  yield take(typeHome.GetProduct);
  const res = yield (getApi('products','GET',null));
  if (res.status === 200) {
    yield put(GetDataProductSuccess(res.data));
  }
}
function* getData() {
  const state = yield select((state) => state.ProductHomeMyReducer);
  yield put(GetDataProductSelectSuccess(state));
}
function* rootSagaProduct() {
  yield fork(getProductSaga);
  yield takeEvery(typeHome.GetProduct, getData);
}
export default rootSagaProduct;
