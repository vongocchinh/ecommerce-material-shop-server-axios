import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import * as format from "../../utils/format";
import "./styles.scss";
import { format_currency, PriceSale } from './../../constant/format';
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
function ProductItem(props) {
  const { classes } = props;
  var { product, value } = props;
  return (
    <Grid key={value} item>
      <Paper className={classes.paper}>
        {product.rule ? (
          <span className={classes.titleProduct}>Trả góp 0 %</span>
        ) : (
          ""
        )}
        <Link
          to={
            "/product/" +
            format.to_slug(product.name) +
            "/" +
            product.id +
            ".html"
          }
          className={classes.Link}
        >
          <div className={classes.layoutImg}>
            <LazyLoadImage
              alt={product.img}
              src={product.img}
              className={classes.imagesProduct}
              effect="opacity"
              delayTime={500}
              placeholder={<Loading classes={classes} />}
            />
          </div>
          <div className={classes.descriptionNameProduct}>
            <div component="p" className={classes.nameProduct}>
              {product.name}
            </div>
          </div>
          <div className={classes.descriptionProduct}>
            <p align="left" component="p" className={classes.priceSale}>
              <strong component="strong">{format_currency(PriceSale(product.price,product.sale))} VNĐ</strong>
            </p>
            <p component="p" className={classes.price}>
              <del component="del">{product.price} VNĐ</del>
            </p>
          </div>
        </Link>
        <div className={classes.ratting}>
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
            ({product.count})
          </Box>
        </div>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ProductItem);
