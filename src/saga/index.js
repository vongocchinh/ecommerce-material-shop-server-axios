/* eslint-disable require-yield */
import { all } from "redux-saga/effects";
import rootSagaProduct from "./home/product";
import rootSagaSlider from "./home/slider";
function* rootSaga() {
  yield all([rootSagaProduct(), rootSagaSlider()]);
}
export default rootSaga;
