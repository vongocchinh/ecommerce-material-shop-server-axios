import {combineReducers} from 'redux';
import ProductHomeMyReducer from './home/product';
import SliderHomeMyReducer from './home/slider';

const myReducer=combineReducers({
    ProductHomeMyReducer,
    SliderHomeMyReducer
});
export default myReducer;