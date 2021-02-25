import React from "react";
import { connect } from "react-redux";
import CartComponent from "../../components/cart/cart";
import CartItemComponent from "../../components/cart/cartItem/CartItem";
import { Redirect } from 'react-router';
import * as action from './../../actions/cart';
function Cart(props) {
  const { CartMyReducer ,SearchMyReducer} = props;
  const deleteCart=(data)=>{
    props.Delete_Cart(data);
  }
  const onHandleIncrease=(data)=>{
    props.onHandleIncrease(data);
  }
  const onHandleReduction=(data)=>{
    props.onHandleReduction(data);
  }
  const showCart=(data)=>{
      let xhtml=null;
        if(data){
            xhtml=data.map((cart,key)=>{
                return (
                    <CartItemComponent cart={cart} stt={key} key={key} deleteCart={deleteCart}
                      onHandleReduction={onHandleReduction}
                      onHandleIncrease={onHandleIncrease}
                    />
                )
            })
        }
      return xhtml;
  }
  if(SearchMyReducer.searchRouter){
    return <Redirect to="/search" />
  }
  return <CartComponent showCart={showCart(CartMyReducer)} />;
}
const mapStateToProps = (state) => {
  return {
    CartMyReducer: state.CartMyReducer,
    SearchMyReducer:state.SearchMyReducer
  };
};
export const dispatchToProps = (dispatch, props) => {
  return {
    Delete_Cart:(data)=>{
      dispatch(action.Delete_Cart(data));
    },
    onHandleIncrease:data=>{
      dispatch(action.Update_Cart_Increase(data));
    },
    onHandleReduction:data=>{
      dispatch(action.Update_Cart_Reduction(data));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Cart);
