import React from "react";
import { Container, Typography, Button, TextField } from "@material-ui/core";
import logo from "../img/logo.png";

const Welcome = () => {
  return (
    <Container>
      <img src={logo} />
      <Typography variant="h3">Welcome</Typography>
      <form>
        <TextField></TextField>
      </form>
    </Container>
  );
};

export default Welcome;
