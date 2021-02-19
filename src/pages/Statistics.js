import React from "react";
import { Container, Typography } from "@material-ui/core";
import Pie from "../components/Pie";

const Statistics = () => {
  return (
    <Container>
      <Typography variant="h3">Daily intake levels</Typography>
      <Pie />
      <Typography variant="h3">BMI progress</Typography>
    </Container>
  );
};

export default Statistics;
