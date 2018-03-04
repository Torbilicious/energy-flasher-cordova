const timeBetweenNumbers = 3100;
const timeBetweenNumberParts = 250;
const timeToFlash = 500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function activateFlash() {
    console.log("activateFlash");

    window.plugins.flashlight.available(function (isAvailable) {
        if (!isAvailable) return;

        window.plugins.flashlight.switchOn(
            function () {
                // optional success callback
            },
            function () {
                // optional error callback
            },
            {intensity: 1} // optional as well
        );
    });
}

function stopFlash() {
    console.log("stopFlash");

    window.plugins.flashlight.available(function (isAvailable) {
        if (!isAvailable) return;

        window.plugins.flashlight.switchOff();
    });
}

async function flashFor(time) {
    activateFlash();
    await sleep(time);
    stopFlash();
}

async function flashNumbers(numbers) {
    const validationRegEx = /^[1-9]{4}$/;
    if (!validationRegEx.test(numbers)) return;

    const numberArray = Array.from(numbers.toString()).map(Number);

    console.log("trigger flashing for: ", numberArray);

    for (const number of numberArray) {
        await flashNumber(number);

        await sleep(timeBetweenNumbers);
    }
}

async function flashNumber(number) {
    console.log("Flashing ", number);

    for(let i = 0; i < number; i++) {
        await flashFor(timeToFlash);

        await sleep(timeBetweenNumberParts);
    }
}
