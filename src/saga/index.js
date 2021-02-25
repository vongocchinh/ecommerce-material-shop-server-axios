/* eslint-disable require-yield */
import { all } from "redux-saga/effects";
import rootSagaProduct from "./home/product";
import rootSagaSlider from "./home/slider";
import rootSagaProductSlider from "./home/productSlider";
import rootSagaSearch from "./header/search";
import rootSagaProductDetail from "./product/ProductDetail";
import rootSagaAddCart from "./cart/addCart";
import rootSagaUpdateCart from "./cart/UpdateCart";
import rootSagaLogin from "./user/login";
import rootSagaLogout from "./user/logout";
import rootSagaUser from "./user/user";
import rootSagaRegisterUser from "./user/register";
function* rootSaga() {
  yield all([
    rootSagaProduct(),
    rootSagaSlider(),
    rootSagaSearch(),
    rootSagaProductSlider(),
    rootSagaProductDetail(),
    rootSagaAddCart(),
    rootSagaUpdateCart(),
    rootSagaLogin(),
    rootSagaUser(),
    rootSagaLogout(),
    rootSagaRegisterUser(),
  ]);
}
export default rootSaga;
