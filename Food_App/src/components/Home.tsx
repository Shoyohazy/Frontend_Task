import { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import RestaurantCard from "./RestaurantCard";
import "../ui/Home.css";
import Shimmer from "../constants/Shimmer";

interface HomeProp {
  searchQuery: string;
}
const Home: React.FC<HomeProp> = ({ searchQuery }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await response.json();
    setRestaurants(
      result.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log(restaurants);
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (restaurant.info.name) {
      return restaurant?.info.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    } else {
      return restaurants;
    }
  });

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          mt={4}
          sx={{
            color: "text.primary",
            fontWeight: "700",
            borderBottom: "2px solid grey",
          }}
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
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Home;
