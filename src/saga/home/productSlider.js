/* eslint-disable require-yield */
import {  fork, put, take ,} from "redux-saga/effects";
import * as typeHome from "./../../constant/home";
// import { fetchGetDataProductHome } from "./../../api/api";
import getApi from './../../utils/getApiServer';
import {
  GetDataProductSliderSuccess,
} from "./../../actions/home";
function* getProductSaga() {
  yield take(typeHome.GetDataProductSlider);
  const res = yield (getApi('products','GET',null));
  if (res.status === 200) {
    yield put(GetDataProductSliderSuccess(res.data));
  }
}

function* rootSagaProductSlider() {
  yield fork(getProductSaga);
}
export default rootSagaProductSlider;
