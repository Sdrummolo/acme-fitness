import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "../context/AppContext";
import { useHistory } from "react-router-dom";
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
} from "@material-ui/core";
import logo from "../img/logo.png";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
  },
});

const Welcome = () => {
  let history = useHistory();
  const { setUserData, setIsAuthenticated } = useContext(AppContext);
  const classes = useStyles();
  const [values, setValues] = useState({
    age: "",
    sex: "",
    weight: "",
    height: "",
    activity: "",
  });
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      age: Number(values.age),
      sex: values.sex,
      weight: Number(values.weight),
      height: Number(values.height),
      activity: values.activity,
    });
    setIsAuthenticated(true);
    handleDialog();
    // history.push("/");
  };

  return (
    <Container>
      <img src={logo} />
      <Typography variant="h3">Welcome</Typography>
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
        <Button type="submit">Next</Button>
      </form>

      {/* Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDialog}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle>You're all set!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We will personalize your experience based on your information
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => history.push("/")}>Ok</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Welcome;
