import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/pageStyles/auth.css";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    // <div>
    //   <h2>Login User</h2>
    //   {error ? <h3>{error}</h3> : ""}
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Password"
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={() => login(username, password)}>Login</button>
    // </div>

    <div>
      {error ? <h3>{error}</h3> : ""}
      <Box className="auth-block">
        <h2 style={{ textAlign: "center" }}>Login User</h2>

        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "75%", margin: "1% auto" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Username
          </InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <AccountCircleRoundedIcon />
              </InputAdornment>
            }
            label="Username"
          />
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "75%", margin: "1% auto" }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          variant="contained"
          style={{ width: "75%", margin: "5% auto", background: "black" }}
          onClick={() => login(username, password)}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default LoginPage;
