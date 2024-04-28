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
  const restaurantProfile =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/";
  console.log(name);

  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          image={restaurantProfile + cloudinaryImageId}
          alt={name}
          height="140"
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
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
    </div>
  );
}

export default RestaurantCard;
