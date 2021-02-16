import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import SettingsIcon from "@material-ui/icons/Settings";
import logo from "../img/logo.png";

// Material UI Styles
const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  menuIcon: {},
}));

const Menu = ({ toggleDrawer, menuOpen, changeCurrPage }) => {
  const classes = useStyles();

  const handleClick = (page) => {
    toggleDrawer();
    changeCurrPage(page);
  };

  return (
    <Drawer
      style={{ width: "240px" }}
      variant="temporary"
      anchor="right"
      open={menuOpen}
      classes={{ paper: classes.drawerPaper }}
      ModalProps={{ onBackdropClick: toggleDrawer }}
    >
      <div style={{ marginBottom: "50px" }}>
        <a target="_blank" href="https://www.acmefitness.com/">
          <img src={logo} />
        </a>
      </div>
      <List>
        <Link to="/" className={classes.link}>
          <ListItem button onClick={() => handleClick("Home")}>
            <ListItemIcon className={classes.menuIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/search-food" className={classes.link}>
          <ListItem button onClick={() => handleClick("Search Food")}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Search Food</ListItemText>
          </ListItem>
        </Link>
        <Link to="/statistics" className={classes.link}>
          <ListItem button onClick={() => handleClick("Statistics")}>
            <ListItemIcon>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText>Statistics</ListItemText>
          </ListItem>
        </Link>
        <Link to="/gym-equipment" className={classes.link}>
          <ListItem button onClick={() => handleClick("Gym Equipment")}>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText>Gym Equipment</ListItemText>
          </ListItem>
        </Link>
        <Link to="/our-instructors" className={classes.link}>
          <ListItem button onClick={() => handleClick("Our Instructors")}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Our Instructors</ListItemText>
          </ListItem>
        </Link>
        <Link to="/settings" className={classes.link}>
          <ListItem button onClick={() => handleClick("Settings")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Menu;