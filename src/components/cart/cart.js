import React from "react";
import { Container } from "@material-ui/core";
import "./styles.scss";

export default function Cart(props) {
  return (
    <>
      <Container maxWidth="lg">
        <div className="container-cart">
          <div className="container-cart-table">
            <table className="container-cart-table-table">
              <thead>
                <tr>
                  <th className="container-cart-item-stt">STT</th>
                  <th className="container-cart-item-product">Product</th>
                  <th className="container-cart-item-images">Images</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th className="container-cart-item-delete">##</th>
                </tr>
              </thead>
              <tbody>{props.showCart}</tbody>
            </table>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
