import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import cityStamp from "../images/search_image.png";
import axios from "axios";
import "../global.css";
import { addCities } from "../store/actions/cityActions";
import { useDispatch, useSelector } from "react-redux";

import { Button, TextField, Grid } from "@mui/material";
import { Box } from "@mui/system";






const Cities = () => {
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.info.cities);

  const fetchData = async () => {
    const data = await axios.get(`http://localhost:5000/cities`);
    dispatch(addCities(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [name, setName] = React.useState("");
  const [country, setCountry] = React.useState("");

  const postData = async () => {
    try {
      await axios.post(`http://localhost:5000/cities`, {
        name: name,
        country: country,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Box className="outer-box">
      <h1><HomeIcon /> Our holiday destinations </h1>
      <div className="search_container">
        <SearchIcon className="search_icon" sx={{ fontSize: 20 }} />
        <TextField
          type="text"
          placeholder="Search..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul>
        {cities
          .filter((city) => {
            const queryLowerCase = query.toLowerCase();
            const cityName = city.name.toLowerCase();
            return cityName.startsWith(queryLowerCase);
          })
          .sort((cityA, cityB) => {
            if (cityA.name < cityB.name) {
              return -1;
            }
            if (cityA.name > cityB.name) {
              return 1;
            }
            return 0;
          })
          .map((city) => (
            <Link to={`/itinerary/${city.name}`}>
            {" "}
            <li className="city_file" key={city._id}>
              {city.name}
              {
                <img
                  src={city.imgUrl ? city.imgUrl : cityStamp}
                  alt={
                    city.imgUrl
                      ? `Imagen de la ciudad de ${city.name}`
                      : "Imagen por defecto"
                  }
                  style={{ width: "240px", height: "200px" }}
                />
              }
            </li>
          </Link>
          ))}
      </ul>
      <form>
        <h3> Do you recommend your city? </h3>
        <div className="addcity_container">
          <div>
            <label>City: </label>
            <input
              className="add_city"
              type="text"
              placeholder="e.g. Barcelona"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Country: </label>
            <input
              className="add_country"
              type="text"
              placeholder="e.g. Spain"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <Button
          className="post_city"
          variant="contained"
          color="primary"
          onClick={postData}
        >
          Add
        </Button>
      </form>
      <footer>
        <Grid container spacing={2}>
          <Grid item>
            <Button component={Link} to="/login" variant="outlined" color="primary">
              Log in
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/create-account" variant="outlined" color="primary">
              Create Account
            </Button>
          </Grid>
        </Grid>
      </footer>
    </Box>
  );
};

export default Cities;
