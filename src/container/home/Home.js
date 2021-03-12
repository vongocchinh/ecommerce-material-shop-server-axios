/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import HomeComponent from "./../../components/home/Home";
import { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./../../actions/home";
import SliderItem from "../../components/home/slider/SliderItem";
import LoadingImg from "../../asset/Spin-1s-200px.gif";
import SliderProductItem from "../../components/home/sliderProduct/SliderItem";
import ProductItem from "../../components/home/product/ProductItem";
import { Redirect } from 'react-router';
function Home(props) {
  useEffect( async () => {
    props.getDataProduct();
    // props.getDataSlider();
    props.getDataProductSlider();
  });
  var { ProductHomeMyReducer, SliderHomeMyReducer ,ProductSliderHomeMyReducer,LoginMyReducer} = props;
  if(LoginMyReducer.Login_User_Success){
    // window.location.reload();
  }
  const showSliderProduct = (data) => {
    var result = null;
    if (data) {
      result = data.map((slide, key) => {
        if (slide.rule) {
          return <SliderProductItem slide={slide} key={key} />;
        }
      });
    } else {
    }
    return result;
  };
  const showDataProduct = (data) => {
    var result = null;
    if (data) {
      result = data.map((product, key) => {
        return <ProductItem product={product} key={key} />;
      });
    }
    return result;
  };
  const {SearchMyReducer}=props;
  if(SearchMyReducer.searchRouter){
    return <Redirect to="/search" />
  }
  const showSlider = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        if (value.rule === true) {
          return <SliderItem value={value} key={key} />;
        }
      });
    } else {
      result = (
        <div className="linkImg">
          <img
            className="imgSlider-loading"
            alt={LoadingImg}
            src={LoadingImg}
          />
        </div>
      );
    }
    return result;
  };
  

  return (
    <>
      <HomeComponent
        product={ProductHomeMyReducer}
        slider={SliderHomeMyReducer}
        showSlider={showSlider(SliderHomeMyReducer)}
        showSliderProduct={showSliderProduct(ProductSliderHomeMyReducer)}
        showDataProduct={showDataProduct(ProductHomeMyReducer)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ProductHomeMyReducer: state.ProductHomeMyReducer,
    SliderHomeMyReducer: state.SliderHomeMyReducer,
    ProductSliderHomeMyReducer:state.ProductSliderHomeMyReducer,
    SearchMyReducer:state.SearchMyReducer,
    LoginMyReducer:state.LoginMyReducer
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    getDataProduct: () => {
      dispatch(action.GetDataProduct());
    },
    getDataSlider: () => {
      dispatch(action.GetDataSlider());
    },
    getDataProductSlider:()=>{
      dispatch(action.GetDataProductSlider());
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Home);
