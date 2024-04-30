import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { restaurantProfile } from "../constants/Dishes";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cartSlice";

interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  imageId: any;
  inStock: number;
  isVeg: number;
  price?: number;
}
interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        id: dish.id,
        name: dish.name,
        image: restaurantProfile + dish.imageId,
        price: dish.price,
      })
    );
  };
  return (
    <>
      <Card key={dish.id} sx={{ display: "flex", height: "12%" }}>
        {/* Display image on the left */}
        <CardMedia
          sx={{ height: "70%", width: "30%", marginTop: "2.5%" }}
          component="img"
          image={restaurantProfile + dish.imageId}
          alt={dish.name}
        />

        {/* Display description, price, and button on the right */}
        <Box
          sx={{ display: "flex", flexDirection: "column", flex: 1, padding: 3 }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h6" sx={{ fontWeight: "600", height: "30%" }}>
              {dish.name}
            </Typography>
            <Typography
              sx={{ marginTop: "10px", color: "black" }}
              variant="body2"
              color="textSecondary"
            >
              {dish.description}
            </Typography>

            {dish.price && (
              <Typography
                sx={{ marginTop: "30px", color: "black", fontWeight: "600" }}
                variant="body1"
                color="textSecondary"
              >
                Price: ₹{(dish.price / 100).toFixed(2)}
              </Typography>
            )}
          </CardContent>
          {/* Add to Cart button */}
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ marginBottom: "3%" }}
            mt={2}
          >
            <Button variant="contained" color="error" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default DishCard;
