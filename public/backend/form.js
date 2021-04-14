const bodyStyle = document.querySelector("#bodyStyle");
const fuelType = document.querySelector("#fuelType");
const transmissionType = document.getElementsByName("transmission");
const priceRange = document.querySelector("#priceRange");
const cityKMPL = document.querySelector("#cityKMPL");
const highwayKMPL = document.querySelector("#highwayKMPL");
const doors = document.getElementsByName("doors");
const length = document.querySelector("#length");

function inputModel(){
    if(bodyStyle.value == 0 || priceRange.value == 0 || cityKMPL.value == 0 || highwayKMPL.value == 0 || length.value == 0){
        alert("Please select a body style.");
        return false;
    }
    
    if(priceRange.value == 0){
        alert("Please select a price range.");
        return false;
    }

    if(cityKMPL.value == 0){
        alert("Please select a city mileage.");
        return false;
    }

    if(length.value == 0){
        alert("Please select a body length.");
        return false;
    }

    return true;
    
}