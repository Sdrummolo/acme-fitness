import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ResponsivePie } from "@nivo/pie";

const useStyles = makeStyles({
  pieContainer: {
    height: "350px",
    width: "350px",
  },
});

const data = [
  {
    id: "proteins",
    label: "Proteins",
    value: 40,
    color: "hsl(235, 70%, 50%)",
  },
  {
    id: "carbohydrates",
    label: "Carbohydrates",
    value: 30,
    color: "hsl(238, 70%, 50%)",
  },
  {
    id: "fats",
    label: "Fats",
    value: 27,
    color: "hsl(323, 70%, 50%)",
  },
  {
    id: "vitamins",
    label: "Vitamins",
    value: 3,
    color: "hsl(5, 70%, 50%)",
  },
];

const Pie = () => {
  const classes = useStyles();

  return (
    <div className={classes.pieContainer}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 20, bottom: 80, left: 20 }}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        enableRadialLabels={false}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemWidth: 80,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Pie;
