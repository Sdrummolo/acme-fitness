import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Menu from "./Menu";
import Home from "./Home";
import SearchFood from "./SearchFood";
import Statistics from "./Statistics";
import GymEquipment from "./GymEquipment";
import OurInstructors from "./OurInstructors";
import Settings from "./Settings";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currPage, setCurrPage] = useState("Home");

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  const changeCurrPage = (page) => {
    setCurrPage(page);
  };

  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer} currPage={currPage} />
      <Menu
        toggleDrawer={toggleDrawer}
        menuOpen={menuOpen}
        changeCurrPage={changeCurrPage}
      />
      <Switch>
        <Route exact path="/">
          <Home changeCurrPage={changeCurrPage} />
        </Route>
        <Route exact path="/search-food">
          <SearchFood />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Route exact path="/gym-equipment">
          <GymEquipment />
        </Route>
        <Route exact path="/our-instructors">
          <OurInstructors />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
