import React, { useState } from "react";
import { Container, Paper, Tabs, Tab } from "@material-ui/core";
import Cardiovascular from "./Cardiovascular";
import Strength from "./Strength";

const GymEquipment = () => {
  const [currentTab, setCurrentTab] = useState("cardio");

  const handleTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <Container>
      <Paper>
        <Tabs variant="fullWidth">
          <Tab label="Cardiovascular" onClick={() => handleTab("cardio")} />
          <Tab label="Strength" onClick={() => handleTab("strength")} />
        </Tabs>
      </Paper>
      {currentTab == "cardio" ? <Cardiovascular /> : <Strength />}
    </Container>
  );
};

export default GymEquipment;
