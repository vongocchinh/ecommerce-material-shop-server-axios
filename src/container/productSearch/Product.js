/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductSearchComponent from "./../../components/productSearch/Product";
import ProductSearchItemComponent from "./../../components/productSearch/ProductItem";
import * as action from "../../actions/header";
import * as actionProduct from "../../actions/home";
function Product(props) {
  const { SearchMyReducer } = props;

  useEffect(async () => {
    handleResetRouterProduct();
    // handleProductAction();
  });
  // const handleProductAction=()=>{
  //   props.handleProductAction();
  // }
  const handleResetRouterProduct = () => {
    setTimeout(() => {
      props.handleResetRouterProduct();
    }, 1000);
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
  };
};
export default connect(mapStateToProps, dispatchToProps)(Product);
