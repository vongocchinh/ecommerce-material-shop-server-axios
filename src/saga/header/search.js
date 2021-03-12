/* eslint-disable no-const-assign */
/* eslint-disable require-yield */
import { put,select, takeLatest } from "redux-saga/effects";
import * as types from "./../../constant/header";
import { SearchProductSuccess } from "./../../actions/header";
import getApiServer from './../../utils/getApiServer';
// import { takeEvery } from 'redux-saga/effects';
import getApi from './../../utils/getApiServer';
import { takeEvery } from 'redux-saga/effects';

function* getProductSearch({ payload }) {
  const state = yield select((state) => state.ProductHomeMyReducer);
  const keyword = payload.name.search;
  const res=yield getApiServer("products/"+keyword,"GET",null);
  console.log(res.data);
  console.log(state);
  const listFillTer = state.filter((item) => {
    return (
      item.name.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !==
      -1
    );
  });
  yield put(SearchProductSuccess({
    payload:{
      listFillTer,
      keyword:keyword
    }
  }));
}
function* getProductSaga() {
  const res = yield (getApi('products','GET',null));
  return res;
}
function* GetProductKeyName({payload}){
  var res=yield getProductSaga();
  const keyword = payload.keyword;
  var data=res.data;
  const listFillTer = data.filter((item) => {
    return (
      item.name.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !==
      -1
    );
  });
  yield put(SearchProductSuccess({
    payload:{
      listFillTer,
      keyword:keyword
    }
  }));
}
function* rootSagaSearch() {
  yield takeEvery(types.GetProductKeyName,GetProductKeyName)
  yield takeLatest(types.SEARCH, getProductSearch);
  
}
export default rootSagaSearch;
