import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { Hidden } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import "./styles.scss";
import PropTypes from 'prop-types';
function Search(props) {
  const { handleSubmit, control, register, reset } = useForm();
  const { classes } = props;
  const onSubmit = (data) => {
    props.nameSearch(data);
    reset();
  };

  return (
    <>
      <Hidden smDown>
        <div className={classes.TypographyHeaderCenter}>
          <form
            className={classes.formHeader}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              as={
                <TextField
                  type="text"
                  name="search"
                  ref={register({ required: true })}
                  size="medium"
                  variant="outlined"
                  placeholder="search..."
                  className={classes.searchHeader}
                  id="outlined-margin-dense"
                  margin="dense"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        onClick={handleSubmit(onSubmit)}
                      >
                        <SearchIcon color="primary" className="icon-search" />
                      </InputAdornment>
                    ),
                  }}
                />
              }
              rules={{ required: true }}
              name="search"
              control={control}
              defaultValue=""
            />
          </form>
        </div>
      </Hidden>
    </>
  );
}
Search.propTypes={
  search:PropTypes.string
}

export default withStyles(styles)(Search);
