import React, { useState, useEffect  } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
// import { div } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Footer(props) {
  const [onTop, setOnTop] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      toggleVisibility();
    });
  });
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  const handleOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
    const { classes } = props;

    return (
      <>
        <div>
          {onTop ? <span className={classes.onTop} onClick={handleOnTop}>
            <ArrowUpwardIcon className={classes.ArrowUpwardIcon} />
          </span> : ""}
        </div>
        <div className={classes.container}>
          <Container maxWidth="lg">
            <div className={classes.containerFooter}>
              <div className={classes.containerItem}>a</div>
              <div className={classes.containerItem}>a</div>
              <div className={classes.containerItem}>a</div>
              <div className={classes.containerItem}>a</div>
            </div>
          </Container>
        </div>
      </>
    );
  }
export default withStyles(styles)(Footer);
