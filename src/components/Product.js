import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const Product = ({ title, img, review, link }) => {
  return (
    <Card>
      <CardMedia component="img" image={img} alt={title} height="150" />
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h4">{review} </Typography>
        <a target="_blank" href={link}>
          <Button>View Details</Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default Product;
