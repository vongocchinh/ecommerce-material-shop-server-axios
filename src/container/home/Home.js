/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import HomeComponent from "./../../components/home/Home";
// import axios from 'axios';
import { useEffect } from "react";
// import { useState } from 'react';
import { connect } from "react-redux";
import * as action from "./../../actions/home";
import SliderItem from "../../components/home/slider/SliderItem";
// import ProductComponent from './../../components/home/product/Product';
import LoadingImg from "../../asset/Spin-1s-200px.gif";
import SliderProductItem from "../../components/home/sliderProduct/SliderProductItem";
function Home(props) {
  // const [data, setData] = useState([]);
  useEffect(async () => {
    props.getDataProduct();
    props.getDataSlider();
  });
  var { ProductHomeMyReducer, SliderHomeMyReducer } = props;
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
  const showSliderProduct = (data) => {
    var result = null;
    if (data) {
      result = data.map((slide, key) => {
        return <SliderProductItem slide={slide} key={key} />;
      });
    } else {
      //  console.log("doi");
    }
    return result;
  };
  return (
    <>
      <HomeComponent
        product={ProductHomeMyReducer}
        slider={SliderHomeMyReducer}
        showSlider={showSlider(SliderHomeMyReducer)}
        showSliderProduct={showSliderProduct(ProductHomeMyReducer)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ProductHomeMyReducer: state.ProductHomeMyReducer,
    SliderHomeMyReducer: state.SliderHomeMyReducer,
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
  };
};
export default connect(mapStateToProps, dispatchToProps)(Home);
