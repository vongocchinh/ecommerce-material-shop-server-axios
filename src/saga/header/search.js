/* eslint-disable no-const-assign */
/* eslint-disable require-yield */
import { put,select, takeLatest } from "redux-saga/effects";
import * as types from "./../../constant/header";
import { SearchProductSuccess } from "./../../actions/header";
import getApiServer from './../../utils/getApiServer';

function* getProductSearch({ payload }) {
  const state = yield select((state) => state.ProductHomeMyReducer);
  const keyword = payload.name.search;
  const res=yield getApiServer("products/"+keyword,"GET",null);
  console.log(res);
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
function* rootSagaSearch() {
  yield takeLatest(types.SEARCH, getProductSearch);
}
export default rootSagaSearch;
