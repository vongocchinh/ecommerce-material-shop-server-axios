import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
// import { div } from "@material-ui/core";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import "./styles.scss";
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Hidden smDown>
          <div className={classes.TypographyHeaderRight} component="div">
            <div className={classes.link}>
              <div component="div" className={classes.componentItemUser}>
                <AccountCircleIcon color="action" />
                <div className={classes.menuItem}>
                  <div className="item-hover-menu-account">
                    Tai Khoản
                    <div className="hover-menu-header">
                      <p>
                        <Link className="item-p-header-account-menu" to="/user">
                          Tài Khoản
                        </Link>
                      </p>
                      <p>
                        <Link
                          className="item-p-header-account-menu"
                          to={"/" + this.props.titleLogin.redirect}
                        >
                          {this.props.titleLogin.name}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/cart" className={classes.link}>
              <div component="div" className={classes.componentItem}>
                <AddShoppingCartOutlinedIcon color="action" />
                <p className={classes.menuItem}>Giỏ Hàng</p>
              </div>
            </Link>
            <Link to="/" className={classes.link}>
              <div component="div" className={classes.componentItem}>
                <FavoriteBorderIcon color="secondary" />
                <p className={classes.menuItem}>Yêu Thích</p>
              </div>
            </Link>
          </div>
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
