import React, {  } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import div from "@material-ui/core/div";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import category from "../../../database/category.json";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import ProductItem from './ProductItem';


function Product(props) {
    const { classes } = props;
    
    const productItem=(product)=>{
     var result=null;
      result=product.map((data,key)=>{
        return (
          <ProductItem 
            product={data}
            key={key}
          />
        )
      })
     return result;
    }
    const {product}=props;
    return (
      <>
        <div>
          <CssBaseline />
          <Container maxWidth="lg">
            <Box
              className={classes.itemProduct}
              display="flex"
              flexDirection="justifyContent"
              justifyContent="space-between"
            >
              <div >
                <div
                  component="strong"
                  className={classes.titleCategoryHome}
                >
                  Điện Thoại Nổi Bật Nhất
                </div>
              </div>
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
            <div
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
                    {productItem(product)}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
  }

export default withStyles(styles)(Product);
