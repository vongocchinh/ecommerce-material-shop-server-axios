/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductSearchComponent from "./../../components/productSearch/Product";
import ProductSearchItemComponent from "./../../components/productSearch/ProductItem";
import * as action from "../../actions/header";
import * as actionProduct from "../../actions/home";
function Product(props) {
  const { SearchMyReducer } = props;
  // console.log(SearchMyReducer.listKeyWordSearch[SearchMyReducer.listKeyWordSearch.length-1]);
  useEffect(async () => {
    handleResetRouterProduct();
    handleProductGetNameAction();
  },[1]);
  // const handleProductAction=()=>{
  //   props.handleProductAction();
  // }
  const handleProductGetNameAction=()=>{
    props.handleProductGetNameAction(SearchMyReducer.listKeyWordSearch[SearchMyReducer.listKeyWordSearch.length-1]);
  }
  const handleResetRouterProduct = () => {
    setTimeout(() => {
      props.handleResetRouterProduct();
    }, 100);
  };
  const showProduct = (data) => {
    let xhtml = null;
    if (data) {
      xhtml = data.map((item, key) => {
        return <ProductSearchItemComponent product={item} key={key} />;
      });
    }
    return xhtml;
  };
  return (
    <ProductSearchComponent showProduct={showProduct(SearchMyReducer.list)} />
  );
}
const mapStateToProps = (state) => {
  return {
    SearchMyReducer: state.SearchMyReducer,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    handleResetRouterProduct: () => {
      dispatch(action.handleResetRouterProduct());
    },
    handleProductAction: () => {
      dispatch(actionProduct.GetDataProduct());
    },
    handleProductGetNameAction:(key)=>{
      dispatch(action.handleProductGetNameAction(key));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Product);
