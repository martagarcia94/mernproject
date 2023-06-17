import React from "react";
import { Link } from "react-router-dom";
import { Typography, Footer, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const LogIn = () => {
  return (
    <>
      <Typography variant="h6">Log In</Typography>
      <Footer>
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </Footer>
    </>
  );
};

export default LogIn;