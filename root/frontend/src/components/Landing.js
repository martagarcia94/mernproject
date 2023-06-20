import React from "react";
import { Link } from "react-router-dom";
import { Typography, AppBar, List, ListItem, IconButton } from "@mui/material";
import Logo from "../images/MYtineraryLogo.png";
import SearchImage from "../images/search_image.png";
import HomeIcon from "@mui/icons-material/Home";
import "../global.css";

const Landing = () => {
  const userMenu = [
    {
      name: "Create Account",
      link: "/createaccount",
    },
    {
      name: "Log In",
      link: "/login",
    },
  ];
  const homeLink = {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
    isActive: false,
  };

  return (
    <div className="wrapper"> {/* Agrega esta línea para envolver el contenido */}
      <AppBar>
        <img
          className="logo"
          src={Logo}
          alt={Logo}
          style={{ height: "80px" }}
        />
      </AppBar>
      <Typography variant="h4" className="title">
        Find your perfect trip, designed by insiders who know and love their cities.
      </Typography>
      <div className="browser-container">
        <Typography variant="h6" className="browser-text">
          Start browsing
        </Typography>
        <Link to="/cities">
          <img
            className="browser-icon"
            src={SearchImage}
            alt={SearchImage}
            style={{ width: "200px", height: "200px" }}
          />
        </Link>
      </div>
      <div className="user-container">
        <Typography variant="h6">
          Want to build your own MYtinerary?
        </Typography>
        <List className="account-container">
          {userMenu.map((menuItem, index) => (
            <ListItem
              key={index}
              component={Link}
              to={menuItem.link}
              className="account-item"
            >
              {menuItem.name}
            </ListItem>
          ))}
        </List>
      </div>
      <footer>
        <Link
          to="/"
          className={`home__icon ${homeLink.isActive ? "active" : ""}`}
        >
          <IconButton>{homeLink.icon}</IconButton>
        </Link>
      </footer>
    </div>
  );
};

export default Landing;
