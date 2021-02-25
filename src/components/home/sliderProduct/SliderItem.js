import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { to_slug } from './../../../utils/format';
import { format_currency, PriceSale } from './../../../constant/format';
const Loading = ({ classes }) => (
  <div className={classes.lazyLoadingImg}>
    <img
      className={classes.imgLazyLoadingImg}
      alt="###"
      src={
        "https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif"
      }
    />
  </div>
);
function SliderItem(props) {
    const {classes}=props;
    const {slide}=props;
  return (
    <>
      <div className={classes.itemProductSlider}>
        <div className={classes.itemProductSliders}>
          <Grid >
            <Paper className={classes.paper}>
              {slide.rule ? (
                <span className={classes.titleProduct}>Trả góp 0 %</span>
              ) : (
                ""
              )}
              <Link to={"/product/"+to_slug(slide.name)+"/"+slide.id+".html"} className={classes.Link}>
                <div component="div" className={classes.layoutImg}>
                  <LazyLoadImage
                    alt={slide.img}
                    src={slide.img}
                    className={classes.imagesProduct}
                    effect="opacity"
                    delayTime={500}
                    placeholder={<Loading classes={classes} />}
                  />
                </div>
                <div component="div" className={classes.descriptionNameProduct}>
                  <div component="p" className={classes.nameProduct}>
                    {slide.name}
                  </div>
                </div>
                <div component="div" className={classes.descriptionProduct}>
                  <p align="left" component="p" className={classes.priceSale}>
                    <strong>{format_currency(PriceSale(slide.price,slide.sale))} VNĐ</strong>
                  </p>
                  <p component="p" className={classes.price}>
                    <del>{slide.price} VNĐ</del>
                  </p>
                </div>
              </Link>
              <div component="div" className={classes.ratting}>
                <Box
                  component="fieldset"
                  borderColor="transparent"
                  className={classes.boxRatting}
                >
                  <Rating
                    name="read-only"
                    value={3}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                </Box>
                <Box
                  component="fieldset"
                  borderColor="transparent"
                  className={classes.boxRattingCount}
                >
                  ({slide.count})
                </Box>
              </div>
            </Paper>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(SliderItem);
