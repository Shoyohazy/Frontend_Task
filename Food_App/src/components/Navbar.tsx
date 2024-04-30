import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "error.main",
        borderRadius: "4px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, marginRight: "40%" }}>
          Food Delivery App
        </Typography>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/home">Restaurants</Link>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InputBase
            placeholder="Search..."
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "0 10px",
            }}
          />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
