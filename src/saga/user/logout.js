import {Logout_User_Success,setHandleLogoutSuccess} from './../../actions/logout';
import * as typeLogout from './../../constant/logout';
import { takeEvery } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

function* Logout(){
   yield localStorage.removeItem("token");
   yield put(Logout_User_Success());
}
function* setHandleLogout(){
    yield put(setHandleLogoutSuccess());
}
function* rootSagaLogout(){
    yield takeEvery(typeLogout.Logout_User,Logout);
    yield takeEvery(typeLogout.setHandleLogout,setHandleLogout)
}
export default rootSagaLogout;