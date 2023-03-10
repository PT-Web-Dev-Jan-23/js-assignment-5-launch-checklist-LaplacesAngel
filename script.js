// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom 
        //the list of planets and add that information to your destination.
        let pickedPlanet = pickedPlanet(listedPlanets);
        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let image = pickedPlanet.image;
        let moons = pickedPlanet.moons;
        addDestinationInfo(pickedPlanet, name, diameter, star, distance, moons, image);
    });


    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;

        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        event.preventDefault();
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

    });
   
});