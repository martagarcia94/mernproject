import React from "react";
import { Link } from "react-router-dom";
import { Typography, Toolbar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "../global.css";

const CreateAccount = () => {
  return (
    <div className="create-account-container">
      <Typography variant="h6">Create Account</Typography>
      <Toolbar>
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </div>
  );
};

export default CreateAccount;

