import React from "react";
import { Link } from "react-router-dom";
import { Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Footer = () => {
  return (
    <div>
      <Typography variant="body2">This is the footer</Typography>
      <Link to="/">
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Link>
    </div>
  );
};

const LogIn = () => {
  return (
    <>
      <Typography variant="h6">Log In</Typography>
      <Footer />
    </>
  );
};

export default LogIn;
