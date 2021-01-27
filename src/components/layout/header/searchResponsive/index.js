import React, { Component } from "react";
import { Hidden, Typography, Container, TextField } from "@material-ui/core";
// import { CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Hidden mdUp>
          <Typography component="div" className={classes.headerMenu}>
            <Typography component="div" className={classes.headerItem}>
              <Container maxWidth="lg">
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "white",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <form className={classes.formHeader}>
                    <TextField
                      type="text"
                      size="medium"
                      variant="outlined"
                      placeholder="search..."
                      className={classes.searchHeader}
                      id="outlined-margin-dense"
                      margin="dense"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </form>
                </Typography>
              </Container>
            </Typography>
          </Typography>
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
