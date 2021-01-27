import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Hidden } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
class index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Hidden smDown>
          <Typography
            className={classes.TypographyHeaderCenter}
            component="div"
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
        </Hidden>
      </>
    );
  }
}
export default withStyles(styles)(index);
