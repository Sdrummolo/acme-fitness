import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppProvider } from "../context/AppContext";

import Navbar from "./Navbar";
import Menu from "./Menu";
import Home from "./Home";
import SearchFood from "./SearchFood";
import Food from "./Food";
import Statistics from "./Statistics";
import GymEquipment from "./GymEquipment";
import OurInstructors from "./OurInstructors";
import Settings from "./Settings";
import NotFound from "./NotFound";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppProvider>
      <Router>
        <Navbar toggleDrawer={toggleDrawer} />
        <Menu toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-food" component={SearchFood} />
          <Route exact path="/search-food/:id" component={Food} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/gym-equipment" component={GymEquipment} />
          <Route exact path="/our-instructors" component={OurInstructors} />
          <Route exact path="/settings" component={Settings} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
