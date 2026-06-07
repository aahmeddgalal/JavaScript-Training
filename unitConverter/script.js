const inputEl = document.getElementById("inputValue")
const convertBtn = document.getElementById("convert")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const METER_TO_FEET = 3.28084
const LITER_TO_GALLON = 3.785
const KILO_TO_POUND = 2.205

function formatConversion(value, unit1, unit2, ratio) {
    return `${value} ${unit1} = ${(value * ratio).toFixed(2)} ${unit2} | ${value} ${unit2} = ${(value / ratio).toFixed(2)} ${unit1}`
}

function renderConversions(value) {
    lengthEl.innerText =
        formatConversion(value, "meters", "feet", METER_TO_FEET)

    volumeEl.innerText =
        formatConversion(value, "gallons", "liters", LITER_TO_GALLON)

    massEl.innerText =
        formatConversion(value, "kilos", "pounds", KILO_TO_POUND)
}

convertBtn.addEventListener("click", () => {
    renderConversions(Number(inputEl.value))
})