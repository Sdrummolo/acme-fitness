import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  listItem: {
    display: "flex",
  },
  title: {
    width: "45%",
  },
  quantity: {
    width: "15%",
  },
  calories: {
    width: "35%",
  },
  remove: {
    width: "5%",
  },
});

const TodayFoodList = ({ listData, setListData }) => {
  const classes = useStyles();

  const removeItem = (key) => {
    setListData(
      listData.filter((item, i) => {
        return key !== i;
      })
    );
  };

  const items = listData.map((item, key) => {
    return (
      <ListItem key={key} className={classes.listItem}>
        <ListItemText className={classes.title}>{item.title}</ListItemText>
        <ListItemText className={classes.quantity}>
          {item.quantity}g
        </ListItemText>
        <ListItemText className={classes.calories}>
          {item.calories}Kcal
        </ListItemText>
        <IconButton edge="end" onClick={() => removeItem(key)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  });

  return <List>{items}</List>;
};

export default TodayFoodList;
