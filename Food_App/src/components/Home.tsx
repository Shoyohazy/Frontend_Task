import { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import RestaurantCard from "./RestaurantCard";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    console.log(result);
    setRestaurants(
      result.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log(restaurants);
  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Typography
          variant="h6"
          mt={4}
          sx={{ color: "text.secondary" }}
          gutterBottom
        >
          Nearby Restaurants
        </Typography>
        <Box
          display="grid"
          sx={{ marginLeft: "-5%" }}
          gridTemplateColumns="repeat(2, 1fr)"
          gap={2}
        >
          {restaurants.map((restaurant) => {
            console.log(restaurant);
            return (
              <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default Home;
