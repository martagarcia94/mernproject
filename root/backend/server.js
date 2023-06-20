const express = require("express");
const app = express();

const db = require("./keys").mongoURI;
const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/cities", require("./routes/cities"));

app.use(("/itinerary", require("./routes/itineraries")));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running on " + port + " port");

  mongoose.set("strictQuery", false);
  mongoose.Promise = global.Promise;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    })
    .then(() => {
      console.log("Connection to Mongo DB established");
    })
    .catch((err) => {
      console.log(err);
    });
});
