import { withStyles } from "@material-ui/styles";
import React, { } from "react";
import styles from "./styles";
// import Typography from "@material-ui/core/Typography";
import Slider from "./slider/Sliders";
import Product from "./product/Product";
import SliderProduct from "./sliderProduct/SliderProduct";
function Home(props) {
  const {product}=props;
    return (
      <>
        <Slider showSlider={props.showSlider} />
        <div component="div" style={{ marginTop: 20 }}></div>
        <SliderProduct  showSliderProduct={props.showSliderProduct} product={product}/>
        <div component="div" style={{ marginTop: 20 }}></div>
        <Product product={product} />
      </>
    );
  }
export default withStyles(styles)(Home);
