import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
// import { div } from "@material-ui/core";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Hidden smDown>
          <div className={classes.TypographyHeaderRight} component="div">
            <Link to="/login" className={classes.link}>
              <div component="div" className={classes.componentItemUser}>
                <AccountCircleIcon color="action" />
                <p
                  className={classes.menuItem}
                >
                 Tai Khoản
                </p>
              </div>
            </Link>
            <Link to="/" className={classes.link}>
              <div component="div" className={classes.componentItem}>
                <AddShoppingCartOutlinedIcon color="action" />
                <p
                  className={classes.menuItem}
                >
                  Giỏ Hàng
                </p>
              </div>
            </Link>
            <Link to="/" className={classes.link}>
              <div component="div" className={classes.componentItem}>
                <FavoriteBorderIcon color="secondary" />
                <p
                  className={classes.menuItem}
                >
                  Yêu Thích
                </p>
              </div>
            </Link>
          </div> 
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
