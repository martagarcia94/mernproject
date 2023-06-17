import React from "react";
import { Link } from "react-router-dom";
import { Typography, Footer, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import "../containers/createaccount.css";

const CreateAccount = () => {
  return (
    <>
      <Typography variant="h6">Create Account</Typography>
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

export default CreateAccount;
