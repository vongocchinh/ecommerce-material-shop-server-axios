import React, { Component } from "react";
import styles from "./style";
import { withStyles } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze';
import data from './data.json';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
  }
  toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({
      ...this.state,
      [anchor]: open,
    });
  };
  list = (anchor, classes) => (
    <div component="div"
      className={clsx(classes.list, {
        //clsx thay doi className
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((data, key) => {
          return (
            <Link key={key} to={data.to} className={classes.buttonDrawer}>
              <ListItem button key={data.name}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.ListItemTextDrawer}
                  primary={data.name}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <Divider />
    </div>
  );
  render() {
    const { classes } = this.props;
    return (
      <>
        <>
          <div className={classes.buttonMenuLeft}>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <React.Fragment>
                  <Tooltip title="Menu">
                  <DehazeIcon  onClick={this.toggleDrawer(anchor, true)}/>
                  </Tooltip>
                </React.Fragment>
                <SwipeableDrawer
                  anchor={anchor}
                  open={this.state[anchor]}
                  onClose={this.toggleDrawer(anchor, false)}
                  onOpen={this.toggleDrawer(anchor, true)}
                >
                  {this.list(anchor, classes)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
        </>
      </>
    );
  }
}
export default withStyles(styles)(index);
