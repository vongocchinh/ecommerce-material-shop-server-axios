import {combineReducers} from 'redux';
import ProductHomeMyReducer from './home/product';
import ProductSliderHomeMyReducer from './home/productSlider';
import SliderHomeMyReducer from './home/slider';
import SearchMyReducer from './header/search';
import ProductDetailMyReducer from './product/productDetail';
import CartMyReducer from './cart/cart';
import LoginMyReducer from './user/login/login';
import UserMyReducer from './user/user/user';
const myReducer=combineReducers({
    ProductHomeMyReducer,
    SliderHomeMyReducer,
    SearchMyReducer,
    ProductSliderHomeMyReducer,
    ProductDetailMyReducer,
    CartMyReducer,
    LoginMyReducer,
    UserMyReducer
});
export default myReducer;