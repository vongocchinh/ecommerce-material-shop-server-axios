import React from "react";
import "./styles.scss";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { format_currency } from "../../../constant/format";

function CartItem(props) {
  const onHandleDeleteCartItem = () => {
    props.deleteCart(props.cart.product);
  };
  const onHandleIncrease = () => {
    props.onHandleIncrease(props.cart.product);
  };
  const onHandleReduction = () => {
    props.onHandleReduction(props.cart.product);
  };
  return (
    <>
      <tr>
        <td>{props.stt+1}</td>
        <td className="container-cart-item-product">
          {props.cart.product.name}
        </td>
        <td className="container-cart-item-images">
          <img
            alt="###"
            src={
              props.cart.product.img
            }
          />
        </td>
        <td>{format_currency(props.cart.product.price)} vnđ</td>
        <td className="container-cart-item-quantity">
          <span onClick={onHandleIncrease} className="cart-increase">
            <AddIcon />
          </span>
          {props.cart.quantity}
          <span onClick={onHandleReduction} className="cart-reduction">
            <RemoveIcon />
          </span>
        </td>
        <td>{format_currency(props.cart.product.price*props.cart.quantity)} vnđ</td>
        <td
          onClick={onHandleDeleteCartItem}
          className="container-cart-item-delete"
        >
          <DeleteForeverIcon className="color-red" />
        </td>
      </tr>
    </>
  );
}
export default CartItem;
