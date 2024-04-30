import { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import RestaurantCard from "./RestaurantCard";
import "../ui/Home.css";
import { Dishes } from "../constants/Dishes";
import DishCard from "./DishCard";
const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    console.log(result);
    setRestaurants(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log(restaurants);
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          mt={4}
          sx={{ color: "text.primary", fontWeight: "700" }}
          gutterBottom
        >
          Top Restaurant Chains
        </Typography>
        <Box
          display="grid"
          sx={{ marginLeft: "-5%" }}
          gridTemplateColumns="repeat(4, 1fr)"
          gap={2}
        >
          {restaurants.slice(0, 4).map((restaurant) => {
            console.log(restaurant);
            return (
              <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
            );
          })}
        </Box>
      </Container>
      <Typography
        variant="h6"
        mt={4}
        sx={{
          color: "text.primary",
          fontWeight: "700",
          marginLeft: "5%",
          borderBottom: "1px solid black",
        }}
        gutterBottom
      >
        Top Dishes to order
      </Typography>
      <div className="dish-container">
        <Box display="flex" flexDirection="column" gap={2} sx={{}}>
          {Dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </Box>
      </div>
    </>
  );
};

export default Home;
