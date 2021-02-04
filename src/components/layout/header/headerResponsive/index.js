import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Container, Hidden } from "@material-ui/core";
// import { div } from "@material-ui/core";
import MenuButton from "./../buttonMenu/index";
import LOGO from "../../../../asset/tải xuống.jpg";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Hidden mdUp>
          <Container maxWidth="lg">
            <div component="div" className={classes.headers}>
              <div component="div" className={classes.MenuButton}>
                <MenuButton />
              </div>
              <div className={classes.logo}>
                <Link to="/">
                  <img alt={LOGO} src={LOGO} />
                </Link>
              </div>
              <div className={classes.MenuRight}>
                <Link to="/a">
                  <AddShoppingCartOutlinedIcon className={classes.MenuRight}/>
                </Link>
              </div>
            </div>
          </Container>
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
