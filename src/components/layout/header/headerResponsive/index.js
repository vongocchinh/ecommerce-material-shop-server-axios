import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Container, Hidden } from "@material-ui/core";
import { Typography } from "@material-ui/core";
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
            <Typography component="div" className={classes.headers}>
              <Typography component="div" className={classes.MenuButton}>
                <MenuButton />
              </Typography>
              <Typography className={classes.logo}>
                <Link to="/">
                  <img alt={LOGO} src={LOGO} />
                </Link>
              </Typography>
              <Typography className={classes.MenuRight}>
                <Link to="/a">
                  <AddShoppingCartOutlinedIcon className={classes.MenuRight}/>
                </Link>
              </Typography>
            </Typography>
          </Container>
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
