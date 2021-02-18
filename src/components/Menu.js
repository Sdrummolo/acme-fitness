import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
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

const Menu = ({ toggleDrawer, menuOpen }) => {
  const classes = useStyles();
  const { changePage } = useContext(AppContext);

  const handleClick = (data) => {
    toggleDrawer();
    changePage({ title: data.title, path: data.path });
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
          <ListItem
            button
            onClick={() => {
              handleClick({ title: "Home", path: "/" });
            }}
          >
            <ListItemIcon className={classes.menuIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/search-food" className={classes.link}>
          <ListItem
            button
            onClick={() =>
              handleClick({ title: "Search Food", path: "/search-food" })
            }
          >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Search Food</ListItemText>
          </ListItem>
        </Link>
        <Link to="/statistics" className={classes.link}>
          <ListItem
            button
            onClick={() =>
              handleClick({ title: "Statistics", path: "/statistics" })
            }
          >
            <ListItemIcon>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText>Statistics</ListItemText>
          </ListItem>
        </Link>
        <Link to="/gym-equipment" className={classes.link}>
          <ListItem
            button
            onClick={() =>
              handleClick({ title: "Gym Equipment", path: "/gym-equipment" })
            }
          >
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText>Gym Equipment</ListItemText>
          </ListItem>
        </Link>
        <Link to="/our-instructors" className={classes.link}>
          <ListItem
            button
            onClick={() =>
              handleClick({
                title: "Our Instructors",
                path: "/our-instructors",
              })
            }
          >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Our Instructors</ListItemText>
          </ListItem>
        </Link>
        <Link to="/settings" className={classes.link}>
          <ListItem
            button
            onClick={() =>
              handleClick({ title: "Settings", path: "/settings" })
            }
          >
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
