import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currPage, setCurrPage] = useState({
    title: "Home",
    path: "/",
  });
  const [listData, setListData] = useState([]);
  const [dayPieData, setDayPieData] = useState([]);
  const [totCalories, setTotCalories] = useState(0);

  // Keeps track of the amount of calories consumed in total. Is updated when an entry is added or removed from listData[]
  // The nutrientID that is associated with Energy (Kcal) in the USDA API is 1008
  useEffect(() => {
    let totCalories = 0;

    listData.forEach((item) => {
      for (const n in item.data.foodNutrients) {
        if (item.data.foodNutrients[n].nutrientId == 1008) {
          totCalories +=
            (item.data.foodNutrients[n].value / 100) * item.quantity;
        }
      }
    });

    setTotCalories(totCalories);
  }, [listData]);

  const changePage = ({ title, path }) => {
    setCurrPage({
      title: title,
      path: path,
    });
  };

  const removeItem = (key) => {
    setListData(
      listData.filter((item, i) => {
        return key !== i;
      })
    );
  };

  const addItem = (item) => {
    setListData((prevListData) => {
      return [item, ...prevListData];
    });
  };

  return (
    <AppContext.Provider
      value={{
        currPage: currPage,
        listData: listData,
        dayPieData: dayPieData,
        totCalories: totCalories,
        isAuthenticated: isAuthenticated,
        changePage: changePage,
        removeItem: removeItem,
        addItem: addItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
