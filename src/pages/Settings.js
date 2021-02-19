import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
  },
});

const Settings = () => {
  const {
    setUserData,
    changePage,
    setListData,
    setIsAuthenticated,
  } = useContext(AppContext);
  const [values, setValues] = useState({
    age: "",
    sex: "",
    weight: "",
    height: "",
    activity: "",
  });
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleInfoDialog = () => {
    setOpenInfoDialog(!openInfoDialog);
  };

  const handleResetDialog = () => {
    setOpenResetDialog(!openResetDialog);
  };

  const handleSubmit = (e) => {
    handleInfoDialog();
    e.preventDefault();
    setUserData({
      age: Number(values.age),
      sex: values.sex,
      weight: Number(values.weight),
      height: Number(values.height),
      activity: values.activity,
    });
  };

  const resetData = () => {
    setListData([]);
    setIsAuthenticated(false);
    changePage({
      title: "Home",
      path: "/",
    });
    history.push("/");
  };

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          type="number"
          name="age"
          label="Age"
          onChange={handleChange}
          value={values.age}
          required
        />
        <TextField
          select
          name="sex"
          label="Sex"
          onChange={handleChange}
          value={values.sex}
          required
        >
          <MenuItem key={"male"} value={"male"}>
            Male
          </MenuItem>
          <MenuItem key={"female"} value={"female"}>
            Female
          </MenuItem>
        </TextField>
        <TextField
          label="Weight"
          name="weight"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={values.weight}
          required
        />
        <TextField
          label="Height"
          name="height"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Cm</InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={values.height}
          required
        />
        <TextField
          select
          label="Activity"
          name="activity"
          onChange={handleChange}
          value={values.activity}
          required
        >
          <MenuItem key={"none"} value={"none"}>
            Little/no exercise
          </MenuItem>
          <MenuItem key={"light"} value={"light"}>
            Light exercise
          </MenuItem>
          <MenuItem key={"moderate"} value={"moderate"}>
            Moderate exercise (3-5 days/wk)
          </MenuItem>
          <MenuItem key={"very active"} value={"very active"}>
            Very active (6-7 days/wk)
          </MenuItem>
          <MenuItem key={"extra active"} value={"extra active"}>
            Extra active (very active & physical job)
          </MenuItem>
        </TextField>
        <Button type="submit">Change Information</Button>
      </form>

      <List>
        <a target="_blank" href="https://www.acmefitness.com/about-us">
          <ListItem button>
            <ListItemText>About Us</ListItemText>
            <ListItemIcon>
              <ArrowForwardIosIcon style={{ fontSize: "small" }} edge="end" />
            </ListItemIcon>
          </ListItem>
        </a>
      </List>

      <Button onClick={handleResetDialog}>Reset App</Button>
      {/* Infos dialog */}
      <Dialog open={openInfoDialog} onClose={handleInfoDialog}>
        <DialogTitle>Information has been updated</DialogTitle>
        <DialogContent>
          <DialogActions>
            <Button onClick={handleInfoDialog}>Ok</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* Reset dialog */}
      <Dialog
        open={openResetDialog}
        onClose={handleResetDialog}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will erease all your customization and data, returning
            everything to default
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleResetDialog}>Cancel</Button>
            <Button onClick={resetData}>Ok</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Settings;
