import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Logo from "../assets/cartEmpty.png";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem } from "../features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeCartItem(id));
  };

  // Handle updating the quantity of an item in the cart
  const handleAddItem = (id: string) => {
    const dispatchItem = cartItems.find((item) => item.id == id);
    dispatch(addCartItem(dispatchItem));
  };

  if (cartItems.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10%" }}>
        <img src={Logo} alt="empty cart" />
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Left side: Cart items */}
        <Grid item xs={8} mt={3}>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{ display: "flex", marginBottom: 2, padding: "10px" }}
            >
              {/* Image on the left */}
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: "cover", height: "150px", width: "300px" }}
              />
              {/* Details on the right */}
              <CardContent sx={{ flex: 1, marginLeft: "17%" }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontWeight: "600", fontSize: "1rem" }}
                >
                  Price: ₹{(item.price / 100).toFixed(2)}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontWeight: "600", fontSize: "1rem" }}
                >
                  Quantity: {item.quantity}
                </Typography>
                {/* Buttons for updating quantity and removing item */}
                <Box display="flex" justifyContent="space-evenly" mt={2}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleRemoveItem(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleAddItem(item.id)}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Right side: Summary and proceed to payout */}
        <Grid item xs={4} mt={3}>
          <Box
            p={2}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" color="textSecondary">
              Cart Summary
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              Total Quantity: {totalQuantity}
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              Total Price: ₹{(totalAmount / 100).toFixed(2)}
            </Typography>
            {/* Proceed to payout button */}
            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 3 }}
              onClick={() => alert("Proceeding to payout...")}
            >
              Proceed to Payout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
