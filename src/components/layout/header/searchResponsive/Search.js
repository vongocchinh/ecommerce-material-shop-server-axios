import React from "react";
import { Hidden, Container, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
function Search(props) {
  const { register, handleSubmit, control, reset } = useForm();
  const { classes } = props;
  const onSubmit = (data) => {
    props.nameSearch(data);
    reset();
  };
  return (
    <>
      <Hidden mdUp>
        <div component="div" className={classes.headerMenu}>
          <div component="div" className={classes.headerItem}>
            <Container maxWidth="lg">
              <div
                component="div"
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <form
                  className={classes.formHeader}
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Controller
                    as={
                      <TextField
                        type="text"
                        ref={register({ required: true })}
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
                    }
                    name="search"
                    control={control}
                    defaultValue=""
                  />
                </form>
              </div>
            </Container>
          </div>
        </div>
      </Hidden>
    </>
  );
}
export default withStyles(styles)(Search);
