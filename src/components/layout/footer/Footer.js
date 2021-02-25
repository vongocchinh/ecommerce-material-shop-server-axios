import React, { useState, useEffect } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
// import { div } from "@material-ui/core";
import { Container } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./styles.scss";
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
        {onTop ? (
          <span className={classes.onTop} onClick={handleOnTop}>
            <ArrowUpwardIcon className={classes.ArrowUpwardIcon} />
          </span>
        ) : (
          ""
        )}
      </div>
      <div className={classes.container}>
        <Container maxWidth="lg">
          <div className="containerFooter">
            <div className="container-footer-layout">
              <div className="containerItem">
                <div className="item item-name-footer-item">
                  <a href="###">
                    <strong>
                      You can now view cua-hang-thuong-mai-material in the
                      browser.
                    </strong>
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
              </div>
              <div className="containerItem">
                <div className="item item-name-footer-item">
                  <a href="###">
                    <strong>
                      You can now view cua-hang-thuong-mai-material in the
                      browser.
                    </strong>
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
              </div>
              <div className="containerItem">
                <div className="item item-name-footer-item">
                  <a href="###">
                    <strong>
                      You can now view cua-hang-thuong-mai-material in the
                      browser.
                    </strong>
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
                <div className="item">
                  <a href="###">
                    You can now view cua-hang-thuong-mai-material in the
                    browser.
                  </a>
                </div>
              </div>
             
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
export default withStyles(styles)(Footer);
