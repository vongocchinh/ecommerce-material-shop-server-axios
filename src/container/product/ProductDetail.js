/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from "react";
import ProductDetailComponent from "./../../components/products/ProductDetail";
import { connect } from "react-redux";
import ProductDetailItemComponent from "../../components/products/productItem/ProductItem";
import { useEffect } from "react";
import * as action from "../../actions/product";
import { Redirect } from 'react-router';
function ProductDetail(props) {
  const { id } = props.match.params;
  const { ProductDetailMyReducer } = props;
  useEffect(async () => {
    ProductDetailAction(id);
  }, [id]);
  const ProductDetailAction = (id) => {
    props.ProductDetailAction(id);
  };
  const {SearchMyReducer}=props;
  if(SearchMyReducer.searchRouter){
    return <Redirect to="/search" />
  }
  const ShowProductDetail = (data) => {
    let xhtml = null;
    if (data) {
      xhtml = <ProductDetailItemComponent data={data} addCart={addCart} />;
    }
    return xhtml;
  };
  const addCart = (product) => {
    props.AddProductCartAction(product);
  };

  return (
    <ProductDetailComponent
      ShowProductDetail={ShowProductDetail(ProductDetailMyReducer)}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    ProductHomeMyReducer: state.ProductHomeMyReducer,
    ProductDetailMyReducer: state.ProductDetailMyReducer,
    SearchMyReducer: state.SearchMyReducer,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    ProductDetailAction: (id) => {
      dispatch(action.ProductDetailAction(id));
    },
    AddProductCartAction: (product) => {
      dispatch(action.AddProductCartAction(product));
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(ProductDetail);
