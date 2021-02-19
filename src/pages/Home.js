import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import Pie from "../components/Pie";
import TodayFoodList from "../components/TodayFoodList";

const useStyles = makeStyles({
  caloricGoalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: "20px",
    padding: "10px 5px",
  },
  link: {
    textDecoration: "none",
  },
});

const Home = () => {
  const { changePage, totCalories, caloricGoal } = useContext(AppContext);

  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3">Today</Typography>
      <div className={classes.caloricGoalContainer}>
        <Typography variant="h6">Caloric Goal:</Typography>
        <Typography variant="h4">
          {Math.round(totCalories)} / {Math.round(caloricGoal)}
        </Typography>
      </div>
      <Pie />
      <Link to="/search-food" className={classes.link}>
        <Button
          variant="contained"
          onClick={() =>
            changePage({ title: "Search Food", path: "search-food" })
          }
        >
          Eat Something
        </Button>
      </Link>
      <Typography variant="h6">Today's Food</Typography>
      <TodayFoodList />
    </Container>
  );
};

export default Home;
