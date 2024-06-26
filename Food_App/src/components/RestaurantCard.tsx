import { restaurantProfile } from "../constants/Dishes";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
function RestaurantCard({
  name,
  cloudinaryImageId,
  costForTwo,
  areaName,
  avgRating,
}) {
  return (
    <>
      <Card sx={{ maxHeight: "140" }}>
        <CardMedia
          component="img"
          image={restaurantProfile + cloudinaryImageId}
          alt={name}
          height="140"
        />
        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: "700" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "3%" }}>
            {areaName}
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "3%" }}
            color="textSecondary"
          >
            {costForTwo}
          </Typography>
          <Rating
            name="text-feedback"
            value={avgRating}
            sx={{ marginTop: "2%" }}
            readOnly
            precision={0.5}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default RestaurantCard;
