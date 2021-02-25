/* eslint-disable require-yield */

import * as typeUser from "./../../constant/register";
import {
    Register_User_Success
} from "./../../actions/user";
import { call, takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import getApiServer from './../../utils/getApiServer';
import { toast } from 'react-toastify';

function* GetApi(body) {
  const res = yield getApiServer("user/register", "POST", body);
 return res;
}
function* Register({ payload }) {
  const response = yield call(GetApi, payload.data);
  if (response.status === 200) {
      toast.dark("Đăng kí thành công ")
    yield put(Register_User_Success());
  }else{
      toast.dark("Đăng kí thất bại")
  }
  
}

function* rootSagaRegisterUser() {
  yield takeEvery(typeUser.Register_User, Register);
}
export default rootSagaRegisterUser;
