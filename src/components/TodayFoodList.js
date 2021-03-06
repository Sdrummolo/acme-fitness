import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
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

const TodayFoodList = () => {
  const classes = useStyles();
  const { listData, removeItem } = useContext(AppContext);

  const items = listData.map((item, key) => {
    // Find Energy per 1g of the item and multiply by quantity
    let totCalories = 0;
    for (const n in item.data.foodNutrients) {
      if (item.data.foodNutrients[n].nutrientId == 1008) {
        totCalories = Math.round(
          (item.data.foodNutrients[n].value / 100) * item.quantity
        );
      }
    }
    return (
      <ListItem key={key} className={classes.listItem}>
        <ListItemText className={classes.title}>
          {item.data.lowercaseDescription}
        </ListItemText>
        <ListItemText className={classes.quantity}>
          {item.quantity}g
        </ListItemText>
        <ListItemText className={classes.calories}>
          {totCalories}Kcal
        </ListItemText>
        <IconButton edge="end" onClick={() => removeItem(key)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  });

  return <List dense={true}>{items}</List>;
};

export default TodayFoodList;
