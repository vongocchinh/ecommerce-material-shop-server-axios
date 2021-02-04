/* eslint-disable require-yield */
import { fork, put, take } from 'redux-saga/effects';
import * as typeHome from "./../../constant/home";
// import { fetchGetData } from "./../../api/api";
import getApi from './../../utils/getApi';
import {
  GetDataSliderSuccess,
} from "./../../actions/home";
function* getDataSlider(){
    yield take(typeHome.GetSlider);
    const res = yield (getApi('slider','GET',null));
    if (res.status === 200) {
      yield put(GetDataSliderSuccess(res.data));
    }
}

function* rootSagaSlider(){
    yield fork(getDataSlider);

}
export default rootSagaSlider;