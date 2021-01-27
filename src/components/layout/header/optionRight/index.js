import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";
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
          <Typography className={classes.TypographyHeaderRight} component="div">
            <Link to="/" className={classes.link}>
              <Typography component="div" className={classes.componentItemUser}>
                <AccountCircleIcon color="action" />
                <Typography
                  className={classes.menuItem}
                  variant="body3"
                  component="p"
                >
                 Tai Khoản
                </Typography>
              </Typography>
            </Link>
            <Link to="/" className={classes.link}>
              <Typography component="div" className={classes.componentItem}>
                <AddShoppingCartOutlinedIcon color="action" />
                <Typography
                  className={classes.menuItem}
                  variant="body3"
                  component="p"
                >
                  Giỏ Hàng
                </Typography>
              </Typography>
            </Link>
            <Link to="/" className={classes.link}>
              <Typography component="div" className={classes.componentItem}>
                <FavoriteBorderIcon color="secondary" />
                <Typography
                  className={classes.menuItem}
                  variant="body3"
                  component="p"
                >
                  Yêu Thích
                </Typography>
              </Typography>
            </Link>
          </Typography>
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
