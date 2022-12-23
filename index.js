/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// variables
const buttonEl = document.getElementById("button-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-values")
const volumeEl = document.getElementById("volume-values")
const massEl = document.getElementById("mass-values")



buttonEl.addEventListener("click", function() {
    length(inputEl.value)
    volume(inputEl.value)
    mass(inputEl.value)
})

function length(arg) {
    const meterToFeet = arg * 3.281
    const feetToMeter = arg / 3.281
    lengthEl.textContent = `${arg} meters = ${meterToFeet.toFixed(2)} feet | ${arg} feet = ${feetToMeter.toFixed(2)} meters`
}

function volume(arg) {
    const literToGal = arg * .264
    const galToLiter = arg / .264
    volumeEl.textContent = `${arg} liters = ${literToGal.toFixed(2)} galloons | ${arg} gallons = ${galToLiter.toFixed(2)} liters`
}

function mass(arg) {
    const kilosToPounds = arg * 2.204
    const poundsToKilos = arg / 2.204
    massEl.textContent = `${arg} kilos = ${kilosToPounds.toFixed(2)} pounds | ${arg} pounds = ${poundsToKilos.toFixed(2)} kilos`
}
