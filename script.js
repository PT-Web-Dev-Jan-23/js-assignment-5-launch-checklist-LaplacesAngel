// Write your JavaScript code here!

//import { myFetch, addDestinationInfo, validateInput, formSubmission, pickPlanet } from "./scriptHelper";


window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        let pickedPlanet = pickPlanet(listedPlanets);

        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let image = pickedPlanet.image;
        let moons = pickedPlanet.moons;

        addDestinationInfo(document, name, diameter, star, distance, moons, image);
    });


    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;

        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;

        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelInput.value);

        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoInput.value);


        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});