import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { Typography } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
import Search from "./search/index";
import OptionRight from "./optionRight/index";
import LOGO from "./../../../asset/tải xuống.jpg";
import Headers from "./headerResponsive/index";
import SearchResponsive from "./searchResponsive/index";
import { Link } from 'react-router-dom';
import HeaderMenu from './../header/headerMenu/index';
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
      <Typography component="div" className={classes.clear} />
        <Hidden xsDown>
          <Typography component="div" className={classes.headerTitle}>
            <Typography component="div" className={classes.headerLayout}>
              <Button className={classes.buttonHeader}>
                Email:Ngocchinh1410@gmail.com
              </Button>
              <Button className={classes.buttonHeader}>Phone:0763717084</Button>
            </Typography>
          </Typography>
        </Hidden>
        <Typography component="div" className={classes.clear} />
        <Headers />
        <Typography component="div" className={classes.clear} />
        <Hidden smDown>
          <Typography component="div" className={classes.headerMenu}>
            <React.Fragment className={classes.headerItem}>
              <CssBaseline />
              <Container maxWidth="lg">
                <Typography
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
                  <Typography
                    className={classes.TypographyHeaderLeft}
                    component="div"
                  >
                    <img alt={LOGO} src={LOGO} className={classes.logoImg} />
                  </Typography>
                  </Link>
                  <Search />
                  <OptionRight />
                </Typography>
              </Container>
            </React.Fragment>
          </Typography>
        </Hidden>
        <Typography component="div" className={classes.clear} />
        <SearchResponsive />
        <Typography component="div" className={classes.clear} />
        <HeaderMenu/>
      </>
    );
  }
}
export default withStyles(styles)(index);
