import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, marginRight: "40%" }}>
          Food Delivery App
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
