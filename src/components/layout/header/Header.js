import React, { } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import Search from "./search/Search";
import OptionRight from "./optionRight/index";
import LOGO from "./../../../asset/tải xuống.jpg";
import Headers from "./headerResponsive/index";
import SearchResponsive from "./searchResponsive/Search";
import { Link } from 'react-router-dom';
import HeaderMenu from './../header/headerMenu/index';
function Header(props) {
    const { classes } = props;
    const {LoginMyReducer}=props;
    return (
      <>
      <div component="div" className={classes.clear} />
        <Hidden xsDown>
          <div component="div" className={classes.headerTitle}>
            <div component="div" className={classes.headerLayout}>
              <Button className={classes.buttonHeader}>
                Email:Ngocchinh1410@gmail.com
              </Button>
              <Button className={classes.buttonHeader}>Phone:0763717084</Button>
            </div>
          </div>
        </Hidden>
        <div component="div" className={classes.clear} />
        <Headers />
        <div component="div" className={classes.clear} />
        <Hidden smDown>
          <div component="div" className={classes.headerMenu}>
            <div className={classes.headerItem}>
              <CssBaseline />
              <Container maxWidth="lg">
                <div
                  component="div"
                  style={{
                    backgroundColor: "white",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link to="/" className={classes.Link}>
                  <div
                    className={classes.TypographyHeaderLeft}
                    component="div"
                  >
                    <img alt={LOGO} src={LOGO} className={classes.logoImg} />
                  </div>
                  </Link>
                  <Search nameSearch={props.nameSearch}/>
                  <OptionRight titleLogin={props.titleLogin} LoginMyReducer={LoginMyReducer} />
                </div>
              </Container>
            </div>
          </div>
        </Hidden>
        <div component="div" className={classes.clear} />
        <SearchResponsive nameSearch={props.nameSearch}/>
        <div component="div" className={classes.clear} />
        <HeaderMenu/>
      </>
    );
  }

export default withStyles(styles)(Header);
