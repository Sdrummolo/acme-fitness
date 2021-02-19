import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import Welcome from "./Welcome";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Home from "./Home";
import SearchFood from "./SearchFood";
import Food from "./Food";
import Statistics from "./Statistics";
import GymEquipment from "./GymEquipment";
import OurInstructors from "./OurInstructors";
import Settings from "./Settings";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "./NotFound";

const App = () => {
  const { isAuthenticated } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      {/* Only render Navbar if user is authenticated */}
      {isAuthenticated ? (
        <>
          <Navbar toggleDrawer={toggleDrawer} />
          <Menu toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
        </>
      ) : null}
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <ProtectedRoute
          exact
          path="/"
          component={Home}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/search-food"
          component={SearchFood}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/search-food/:id"
          component={Food}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/statistics"
          component={Statistics}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/gym-equipment"
          component={GymEquipment}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/our-instructors"
          component={OurInstructors}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          exact
          path="/settings"
          component={Settings}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
