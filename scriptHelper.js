// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>${name} </li>
                    <li>${diameter}: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
    if (testInput === '' || testInput === null) {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else if (!isNaN(Number(testInput))) {
        return "Is a number"
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || cargoLevel === Empty) {
        alert('All Fields Are Required')
    } else if (validateInput(pilot) === 'Is a number' || validateInput(copilot) === 'Is a number') {
        alert('Pilot and Copilot cannot be numbers')
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Fuel Level and Cargo Mass must be numbers")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`
        copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`
    }

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Shuttle not ready for launch";
        list.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else if (cargoLevel > 10000) {
        list.visibility = "visible"
        cargoStatus.innerHTML = "too much mass for the shuttle to take off";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch"
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randNum = Math.floor(Math.random()*planets.length);
    return planets[randNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
