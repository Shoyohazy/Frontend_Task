import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  CardMedia,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../assets/logo.jpg";
import { useState } from "react";

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(searchQuery); // Call the onSearch function with the search query
    }
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "error.main",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="App Logo" height={38} />
        </Box>

        <Box
          sx={{
            marginRight: "30%",
            display: "flex",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              fontWeight: "500",
              color: "white",
              marginLeft: "20%",
              marginRight: "10px",
            }}
          >
            Restaurants
          </Typography>
          <Typography
            variant="h6"
            component={Link}
            to="/dishes"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              fontWeight: "500",
              color: "white",
              marginLeft: "20%",
            }}
          >
            Dishes
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "0 10px",
            }}
          />
          <IconButton color="inherit" onClick={handleSearchSubmit}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
