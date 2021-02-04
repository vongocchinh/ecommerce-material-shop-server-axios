/* eslint-disable array-callback-return */
import React, {  } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
// import { div } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./configSlider";

function SliderProduct(props) {
  const { classes } = props;
  return (
    <>
      <div component="div" className={classes.container}>
        <Container>
          <div component="div" className={classes.containerSlider}>
            <div component="div" className={classes.titleName}>
              <div
                variant="body2"
                component="p"
                className={classes.titleP}
              >
                <strong
                  className={classes.titleP}
                >
                  Điện Thoại Nổi Bật
                </strong>
              </div>
            </div>
            <Slider {...settings} className={classes.slider}>
            {props.showSliderProduct}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
}
export default withStyles(styles)(SliderProduct);
