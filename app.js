//Required packages
const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
//Path configurations
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Home page
app.get("/", (req, res) => {
  res.render("index");
});

//Saving input data as cookeis from home page
app.post("/", (req, res) => {
  //Input data of user preferences
  const bodyStyle = req.body.bodyStyle;
  const fuel = req.body.fuel;
  const transmission = req.body.transmission;
  const priceRange = req.body.priceRange;
  const mileage = req.body.mileage;
  const doors = req.body.doors;
  const length = req.body.length;

  //Variables for calculating data based on preferences
  let highwayMileage = null;
  let rpm = null;
  let cylinders = null;

  //Calculating highway mileage, peak-rpm
  //and number of engine cyliners based on user preferences
  switch (mileage) {
    case "8":
      highwayMileage = 11;
      rpm = 5167;
      cylinders = 5;
      break;

    case "12":
      highwayMileage = 15;
      rpm = 5070;
      cylinders = 4;
      break;

    case "17":
      highwayMileage = 20;
      rpm = 5110;
      cylinders = 4;
      break;

    default:
      highwayMileage = 13;
      rpm = 5125;
      cylinders = 4;
      break;
  }

  //Creating cookies for user preferences
  res.cookie("bodyStyle", bodyStyle);
  res.cookie("fuel", fuel);
  res.cookie("transmision", transmission);
  res.cookie("priceRange", priceRange);
  res.cookie("mileage", mileage);
  res.cookie("doors", doors);
  res.cookie("length", length);
  res.cookie("highwayMileage", highwayMileage);
  res.cookie("rpm", rpm);
  res.cookie("cylinders", cylinders);

  //Redirecting to recommend page
  res.redirect("/recommend");
});

//Test page
app.get("/recommend", (req, res) => {
  console.log("Cookies", req.cookies);
  res.render("recommend");
});

//Error handler
app.all("*", (req, res) => {
  res.send("Error 404: Page does not exist");
});

//Localhost listener
app.listen(3000, () => {
  console.log("Serving on port 3000");
});
