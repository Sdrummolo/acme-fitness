import React, { useState, useEffect, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

const Food = () => {
  const { addItem, changePage } = useContext(AppContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const data = useLocation().state;
  let history = useHistory();

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    handleDialog(); // Close modal
    addItem({ data: data, quantity: quantity }); // Update list
    history.push("/"); // Redirect to Home
    changePage({ title: "Home", path: "/" }); // Update navigation bar title
  };

  return (
    <Container>
      <Typography variant="h5">Values per 100g</Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Unit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.foodNutrients.map((nutrient, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{nutrient.nutrientName}</TableCell>
                  <TableCell>{nutrient.value}</TableCell>
                  <TableCell>{nutrient.unitName.toLowerCase()}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" onClick={handleDialog}>
        Eat
      </Button>

      <Dialog open={openDialog} onClose={handleDialog}>
        <DialogTitle>Enter Quantity</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            placeholder="g"
            type="number"
            onChange={handleChange}
          />
          <DialogActions>
            <Button onClick={handleDialog} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Ok
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Food;
