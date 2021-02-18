import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  appBar: {},
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Navbar = ({ toggleDrawer }) => {
  const { currPage, changePage } = useContext(AppContext);
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {currPage.path == "/search-food/:item" ? (
          <Link
            to="/search-food"
            onClick={() =>
              changePage({ title: "Search Food", path: "/search-food" })
            }
          >
            <ArrowBackIosIcon />
          </Link>
        ) : null}
        <Typography variant="h6" edge="center">
          {currPage.title}
        </Typography>
        <IconButton edge="end" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
