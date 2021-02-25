/* eslint-disable require-yield */

import * as typeUser from "./../../constant/user";
import {
    getUserDetailSuccess
} from "./../../actions/user";
import { call, takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import getApiServer from './../../utils/getApiServer';

function* GetApi(body) {
  const res = yield getApiServer("user/"+body, "get", null);
 return res;
}
function* getUser({ id }) {
  const response = yield call(GetApi, id);
  if (response.status === 200) {
    var dataUser=response.data.user
    yield put(getUserDetailSuccess(dataUser));
  }
}

function* rootSagaUser() {
  yield takeEvery(typeUser.getUserDetail, getUser);
}
export default rootSagaUser;
