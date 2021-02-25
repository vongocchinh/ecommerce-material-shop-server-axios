import React from "react";
import "./styles.scss";
function ProductItem(props) {
const addCart=()=>{
    props.addCart(props.data.productDetail);
}
  return (
    <>
      <div>{props.data.productDetail.name}</div>
      <div>{props.data.productDetail.id}</div>
      <div>
          <img className="img-product-detail" src={props.data.productDetail.img} alt={props.data.productDetail.img} />
      </div>
      <div>
          <button onClick={addCart} className="add-cart-product-detail">add cart</button>
      </div>
    </>
  );
}

export default ProductItem;
