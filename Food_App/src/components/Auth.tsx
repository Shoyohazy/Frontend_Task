import { Box, Button, TextField, Typography, Container } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { User } from "../types/index";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState<User>({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  //Preset passwords
  const presetEmail = "xyz@gmail.com";
  const presetPassword = "Xyz@123";

  // Validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passLength = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#\$%\^&\*]/.test(password);
    return passLength && hasUpperCase && hasSpecialChar;
  };

  const handleLogin = () => {
    if (!validateEmail(userCredentials.email)) {
      setError("Invalid email format.");
      return;
    }

    if (!validatePassword(userCredentials.password)) {
      setError(
        "Invalid Password(1 uppercase, 1 Special charcter, 6 min characters )."
      );
      return;
    }
    if (
      userCredentials.email === presetEmail &&
      userCredentials.password === presetPassword
    ) {
      Navigate("/home");
    } else {
      setError("Invalid Email or Password");
    }
  };
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          margin="normal"
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, email: e.target.value })
          }
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, password: e.target.value })
          }
          margin="normal"
          fullWidth
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="error"
          endIcon={<LoginIcon />}
          onClick={handleLogin}
          fullWidth
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
