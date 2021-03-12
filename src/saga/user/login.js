/* eslint-disable require-yield */
import * as typeLogin from "./../../constant/login";
import {
  Login_User_Success,
  Login_User_Fail,
  setOnRedirectLoginSuccess,
} from "./../../actions/user";
import { call, takeEvery } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import { toast } from "react-toastify";
import getApiServer from './../../utils/getApiServer';

function* loginApi(body) {
  const res = yield getApiServer("user/login", "POST", body);
 return res;
}
function* loginUser({ payload }) {

  const response = yield call(loginApi, payload);
 
  if (response.status === 200) {
    toast.dark("login success !!!");
    var token=response.data.token;
    console.log(token);
    localStorage.setItem("token", token);
    yield put(Login_User_Success(token));
  } else {
    toast.dark("login that bai !!!");
    yield put(Login_User_Fail());
  }
}

function* setOnRedirectLogin() {
  yield put(setOnRedirectLoginSuccess());
}

function* rootSagaLogin() {
  yield takeEvery(typeLogin.Login_User, loginUser);
  yield takeEvery(typeLogin.setOnRedirectLogin, setOnRedirectLogin);
}
export default rootSagaLogin;
