import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import axios from "axios";
import "../global.css";
import { addCities } from "../store/actions/cityActions";
import { useDispatch, useSelector } from "react-redux";
//import cityStamp from "../images/city.jpg";
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
      <h1><HomeIcon /> Cities</h1>
      <div>
        <TextField
          type="text"
          placeholder="Search..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {cities
            .filter((city) => {
              const queryLowerCase = query.toLowerCase();
              const cityName = city.name.toLowerCase();
              return cityName.startsWith(queryLowerCase);
            })
            .sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((city) => (
              <li key={city._id}>{city.name}</li>
            ))}
        </ul>
      </div>
      <form>
        <h3>Do you want to add your city?</h3>
        <div className="addcity_container">
          <div>
            <label>City: </label>
            <input
              className="add_city"
              type="text"
              placeholder="ej: Barcelona"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Country: </label>
            <input
              className="add_country"
              type="text"
              placeholder="ej: Spain"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <Button className="post_city" variant="contained" color="primary" onClick={postData}>
          Add City!
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
