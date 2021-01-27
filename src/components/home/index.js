import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import data from "./../../database/database.json";
import category from "./../../database/category.json";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.scss";
import Hidden from "@material-ui/core/Hidden";
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
class Product extends Component {
  render() {
    const { classes } = this.props;
    var { product, value } = this.props;
    return (
      <Grid key={value} item>
        <Paper className={classes.paper}>
          {product.rule ? (
            <span className={classes.titleProduct}>Trả góp 0 %</span>
          ) : (
            ""
          )}
          <Typography component="div" className={classes.layoutImg}>
            <LazyLoadImage
              alt={product.img}
              src={product.img}
              className={classes.imagesProduct}
              effect="opacity"
              delayTime={500}
              placeholder={<Loading classes={classes} />}
            />
          </Typography>
          <Typography component="div" className={classes.descriptionNameProduct}>
            <Typography component="p" className={classes.nameProduct}>{product.name}</Typography>
          </Typography>
          <Typography component="div" className={classes.descriptionProduct}>
            <Typography variant="body3" align="left" component="p" className={classes.priceSale}>
              <Typography variant="body3" component="strong">{product.priceSale} VNĐ</Typography>
            </Typography>
            <Typography variant="body3" component="p" className={classes.price}>
              <Typography variant="body3" component="del">{product.price} VNĐ</Typography>
            </Typography>
          </Typography>
          <Typography component="div" className={classes.ratting}>
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
          </Typography>
        </Paper>
      </Grid>
    );
  }
}
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography component="div" style={{ marginTop: 20 }}></Typography>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Box
              className={classes.itemProduct}
              display="flex"
              flexDirection="justifyContent"
              justifyContent="space-between"
            >
              <Typography component="div">
                <Typography component="strong" className={classes.titleCategoryHome}>
                  Điện Thoại Nổi Bật Nhất
                </Typography>
              </Typography>
              <Hidden xsDown>
                <Box
                  display="flex"
                  flexDirection="row"
                  className={classes.itemCategoryProduct}
                >
                  {category.map((value, key) => (
                    <Button className={classes.itemNameProduct} key={key}>
                      <>{value.name}</>
                    </Button>
                  ))}
                </Box>
              </Hidden>
              <Hidden smUp>
                <Button className={classes.itemNameProduct}>Tất Cả</Button>
              </Hidden>
            </Box>
            <Typography
              component="div"
              className={classes.containerLayout}
              style={{ backgroundColor: "white", height: "auto" }}
            >
              <Grid container className={classes.root} spacing={2}>
                <Grid
                  className={classes.containerMainProduct}
                  item
                  xs={12}
                  box-shadow={3}
                >
                  <Grid container justify="center" spacing={2}>
                    {data.map((product, value) => (
                      <Product
                        product={product}
                        value={value}
                        key={value}
                        classes={classes}
                      />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Typography>
          </Container>
        </React.Fragment>
      </>
    );
  }
}
export default withStyles(styles)(index);
