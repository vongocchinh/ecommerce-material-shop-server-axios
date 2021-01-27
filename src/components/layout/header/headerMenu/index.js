import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
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
        <Typography component="div" className={classes.header}>
          <Container maxWidth="lg">
            <Typography component="div" className={classes.container}>
              <Hidden className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <Typography component="div" className={classes.MenuItem}>
                    <HomeIcon style={{ color: "white",marginTop:-7,marginRight:2 }} />
                    <Typography className={classes.item} component="p" variant="body2">
                      HOME
                    </Typography>
                  </Typography>
                </Link>
              </Hidden>
              <Hidden  className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <Typography component="div" className={classes.MenuItem}>
                    <Typography className={classes.item} component="p" variant="body2">
                      ĐIỆN THOẠI
                    </Typography>
                  </Typography>
                </Link>
              </Hidden>
              <Hidden className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <Typography component="div" className={classes.MenuItem}>
                    <Typography className={classes.item} component="p" variant="body2">
                      TIN TỨC
                    </Typography>
                  </Typography>
                </Link>
              </Hidden>
              <Hidden xsDown className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <Typography component="div" className={classes.MenuItem}>
                    <Typography className={classes.item} component="p" variant="body2">
                      TÀI KHOẢN
                    </Typography>
                  </Typography>
                </Link>
              </Hidden>
              <Hidden xsDown className={classes.menu}>
                <Link to="/" className={classes.link}>
                  <Typography component="div" className={classes.MenuItem}>
                    <Typography className={classes.item} component="p" variant="body2">
                      LIÊN HỆ
                    </Typography>
                  </Typography>
                </Link>
              </Hidden>
            </Typography>
          </Container>
        </Typography>
      </>
    );
  }
}
export default withStyles(styles)(index);
