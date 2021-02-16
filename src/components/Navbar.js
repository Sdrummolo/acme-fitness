import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  appBar: {},
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Navbar = ({ toggleDrawer, currPage }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" edge="center">
          {currPage}
        </Typography>
        <IconButton edge="end" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
