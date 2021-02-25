import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div component="div" className={classes.header}>
          <Container maxWidth="lg">
            <div component="div" className={classes.container}>
              <Hidden className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <div component="div" className={classes.MenuItem}>
                    <HomeIcon style={{ color: "white",marginTop:-7,marginRight:2 }} />
                    <div className={classes.item} component="p" variant="body2">
                      HOME
                    </div>
                  </div>
                </Link>
              </Hidden>
              <Hidden  className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <div component="div" className={classes.MenuItem}>
                    <div className={classes.item} component="p" variant="body2">
                      ĐIỆN THOẠI
                    </div>
                  </div>
                </Link>
              </Hidden>
              <Hidden className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <div component="div" className={classes.MenuItem}>
                    <div className={classes.item} component="p" variant="body2">
                      TIN TỨC
                    </div>
                  </div>
                </Link>
              </Hidden>
              <Hidden xsDown className={classes.menu}>
                <Link to="/login" className={classes.link}>
                  <div component="div" className={classes.MenuItem}>
                    <div className={classes.item} component="p" variant="body2">
                      TÀI KHOẢN
                    </div>
                  </div>
                </Link>
              </Hidden>
              <Hidden xsDown  className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <div component="div" className={classes.MenuItem}>
                    <div className={classes.item} component="p" variant="body2">
                      LIÊN HỆ
                    </div>
                  </div>
                </Link>
              </Hidden> 
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default withStyles(styles)(index);
 