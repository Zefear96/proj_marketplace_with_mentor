import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, GitHub } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // custom

function Footer() {
  // custom
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <footer>
      <Box sx={{ display: "flex" }} className="box-icons">
        <IconButton className="footer-icon">
          <Facebook />
        </IconButton>
        <IconButton className="footer-icon">
          <Twitter />
        </IconButton>
        <IconButton className="footer-icon">
          <Instagram />
        </IconButton>
        <IconButton className="footer-icon">
          <GitHub />
        </IconButton>
      </Box>
      <Typography variant="caption" style={{ width: "100%" }}>
        © 2023 All rights reserved
      </Typography>
    </footer>
  );
}

export default Footer;
