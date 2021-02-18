import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Food from "./Food";

const useStyles = makeStyles({});

const SearchFood = () => {
  const { changePage } = useContext(AppContext);
  const [input, setInput] = useState("apple");
  const [isFetching, setIsFetching] = useState(false);
  const [results, setResults] = useState([]);

  // Control textfield input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setIsFetching(true);
      const formattedQuery = input.replaceAll(" ", "%20");
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=kpgGjnKQtqTdZY5sRaJjPbAbfTCaHymb8l327r9d&query=${formattedQuery}`
      );
      const json = await response.json();
      setResults(json.foods);
      setIsFetching(false);
    } catch (e) {
      console.log(e);
    }
  };

  const classes = useStyles();

  return (
    <Container>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          className={classes.textField}
          fullWidth
          placeholder={"Type food here"}
          onChange={handleChange}
        />
      </form>
      {isFetching ? <CircularProgress /> : null}
      <Route exact path="/search-food/:id">
        <Food />
      </Route>
      <List>
        {results.map((item, i) => {
          return (
            <Link
              to={{ pathname: `/search-food/${i}`, props: item }}
              key={i}
              onClick={() =>
                changePage({
                  title: item.lowercaseDescription,
                  path: "/search-food/:item",
                })
              }
            >
              <ListItem button>
                <ListItemText>{item.lowercaseDescription}</ListItemText>
                <ArrowForwardIosIcon style={{ fontSize: "small" }} edge="end" />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Container>
  );
};

export default SearchFood;
