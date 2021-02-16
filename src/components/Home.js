import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import Pie from "./Pie";
import TodayFoodList from "./TodayFoodList";

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

const Home = ({ changeCurrPage }) => {
  const [listData, setListData] = useState([
    {
      title: "Peanuts",
      quantity: 30,
      calories: 170,
    },
    {
      title: "Strawberries",
      quantity: 130,
      calories: 50,
    },
    {
      title: "Yogurt",
      quantity: 170,
      calories: 170,
    },
  ]);

  const classes = useStyles();

  const handleClick = (page) => {
    changeCurrPage(page);
  };

  return (
    <Container>
      <Typography variant="h3">Today</Typography>
      <div className={classes.caloricGoalContainer}>
        <Typography variant="h6">Caloric Goal:</Typography>
        <Typography variant="h4">430 / 2300</Typography>
      </div>
      <Pie />
      <Link to="/search-food" className={classes.link}>
        <Button variant="contained" onClick={() => handleClick("Search Food")}>
          Eat Something
        </Button>
      </Link>
      <TodayFoodList listData={listData} setListData={setListData} />
    </Container>
  );
};

export default Home;
