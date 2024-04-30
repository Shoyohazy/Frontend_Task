import React from "react";
import { Dishes } from "../constants/Dishes";
import { Box } from "@mui/material";
import DishCard from "./DishCard";

function DishesSection() {
  return (
    <div className="dish-container">
      <Box display="flex" flexDirection="column" gap={2} sx={{}}>
        {Dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </Box>
    </div>
  );
}

export default DishesSection;
