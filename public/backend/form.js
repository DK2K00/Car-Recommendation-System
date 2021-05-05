//Getting data
const bodyStyle = document.querySelector("#bodyStyle");
const fuelType = document.querySelectorAll("input[name='fuel']");
const transmissionType = document.querySelectorAll(
  "input[name='transmission']"
);
const priceRange = document.querySelector("#priceRange");
const cityKMPL = document.querySelector("#cityKMPL");
// const highwayKMPL = document.querySelector("#highwayKMPL");
const doors = document.querySelectorAll("input[name='doors']");
const length = document.querySelector("#length");

//Flags for checking if data is entered
let fuelFlag = 0;
let transmissionFlag = 0;
let doorFlag = 0;

//Function to check if all data has been entered
function inputModel() {
    //To check for body style
  if (bodyStyle.value == 0) {
    alert("Please select a body style.");
    return false;
  }

  //To check if a fuel option has been selected
  for (let fuel of fuelType) {
    if (fuel.checked) {
      fuelFlag = 1;
      break;
    }
  }

  if (fuelFlag == 0) {
    alert("Please select a fuel type");
    return false;
  }

  //To check if a transmission has been selected
  for (let transmision of transmissionType) {
    if (transmision.checked) {
      transmissionFlag = 1;
      break;
    }
  }

  if (transmissionFlag == 0) {
    alert("Please select a transmission type");
    return false;
  }

  //To check for price range
  if (priceRange.value == 0) {
    alert("Please select a price range.");
    return false;
  }

  if (cityKMPL.value == 0) {
    alert("Please select a city mileage.");
    return false;
  }

  //To check if a door option has been selected
  for (let door of doors) {
    if (door.checked) {
      doorFlag = 1;
      break;
    }
  }

  if (doorFlag == 0) {
    alert("Please select number of doors");
    return false;
  }

  //To check for body length
  if (length.value == 0) {
    alert("Please select a body length.");
    return false;
  }

  return true;
}
